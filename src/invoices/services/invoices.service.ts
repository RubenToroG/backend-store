import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Invoice } from '../entities/invoices.entity';
import { ProductsService } from './../../products/services/products.service';
import { CreateInvoiceDto, UpdateInvoiceDto } from '../dtos/invoice.dto';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice) private invoiceRepo: Repository<Invoice>,
    private userService: UsersService,
  ) {}

  findAll() {
    return this.invoiceRepo.find({ relations: ['user'] });
  }

  async create(data: CreateInvoiceDto) {
    const newInvoice = this.invoiceRepo.create(data);
    if (data.userId) {
      const user = await this.userService.findOne(data.userId);
      newInvoice.user = user;
    }
    return this.invoiceRepo.save(newInvoice);
  }

  async update(id: number, changes: UpdateInvoiceDto) {
    const invoice = await this.invoiceRepo.findOne(id);
    if (changes.userId) {
      const user = await this.userService.findOne(changes.userId);
      invoice.user = user;
    }
    return this.invoiceRepo.save(invoice);
  }
}
