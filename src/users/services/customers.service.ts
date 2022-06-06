import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCustomerDto } from '../dtos/customer.dto';
import { Customer } from '../entities/customer.entity';
import { UsersService } from './users.service';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
    private userService: UsersService,
  ) {}

  async findOne(id: number) {
    const customer = await this.customerRepo.findOne(id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  findAll() {
    return this.customerRepo.find({
      relations: ['user'],
    });
  }

  async create(data: CreateCustomerDto) {
    const newCustomer = this.customerRepo.create(data);
    if (data.userId) {
      const user = await this.userService.findOne(data.userId);
      newCustomer.user = user;
    }
    return await this.customerRepo.save(newCustomer);
  }
}
