import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../../users/entities/users.entity';
import { Customer } from 'src/users/entities/customer.entity';
import { Invoice } from '../entities/invoices.entity';
import { CreateInvoiceDto, UpdateInvoiceDto } from '../dtos/invoice.dto';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
    @InjectRepository(Invoice) private invoiceRepo: Repository<Invoice>,
  ) {}

  findAll() {
    return this.invoiceRepo.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    const invoice = await this.invoiceRepo.findOne(id, {
      relations: ['user'],
    });
    if (!invoice) {
      throw new NotFoundException(`Invoice #${id} not found`);
    }
    return invoice;
  }

  async create(data: CreateInvoiceDto) {
    const newInvoice = new Invoice();
    if (data.userId) {
      const user = await this.userRepo.findOne(data.userId);
      newInvoice.user = user;
    }
    if (data.customerId) {
      const customer = await this.customerRepo.findOne(data.customerId);
      newInvoice.customer = customer;
    }
    return this.invoiceRepo.save(newInvoice);
  }

  async update(id: number, changes: UpdateInvoiceDto) {
    const invoice = await this.invoiceRepo.findOne(id);
    if (changes.customerId) {
      const customer = await this.customerRepo.findOne(changes.customerId);
      invoice.customer = customer;
    }
    return this.invoiceRepo.save(invoice);
  }

  remove(id: number) {
    return this.invoiceRepo.delete(id);
  }
}
