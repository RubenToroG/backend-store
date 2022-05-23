import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Invoice } from '../entities/invoices.entity';
import { CreateInvoiceDto, UpdateInvoiceDto } from '../dtos/invoice.dto';
import { Product } from '../../products/entities/product.entity';
import { User } from 'src/users/entities/users.entity';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice) private invoiceRepo: Repository<Invoice>,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  findAll() {
    return this.invoiceRepo.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    const invoice = await this.invoiceRepo.findOne(id, {
      relations: ['user', 'products'],
    });
    if (!invoice) {
      throw new NotFoundException(`Invoice #${id} not found`);
    }
    return invoice;
  }

  async create(data: CreateInvoiceDto) {
    const newInvoice = this.invoiceRepo.create(data);
    if (data.userId) {
      const user = await this.userRepo.findOne(data.userId);
      newInvoice.user = user;
    }
    if (data.productsIds) {
      const products = await this.productRepo.findByIds(data.productsIds);
      newInvoice.products = products;
    }
    return this.invoiceRepo.save(newInvoice);
  }

  async update(id: number, changes: UpdateInvoiceDto) {
    const invoice = await this.invoiceRepo.findOne(id);
    if (changes.userId) {
      const user = await this.userRepo.findOne(changes.userId);
      invoice.user = user;
    }
    return this.invoiceRepo.save(invoice);
  }
}
