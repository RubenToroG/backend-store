import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateInvoiceDto, UpdateInvoiceDto } from '../dtos/invoice.dto';
import { User } from '../../users/entities/users.entity';
import { Customer } from 'src/users/entities/customer.entity';
import { Invoice } from '../entities/invoices.entity';
import { Product } from '../../products/entities/product.entity';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice) private invoiceRepo: Repository<Invoice>,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
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
    if (data.customerId) {
      const customer = await this.customerRepo.findOne(data.customerId);
      newInvoice.customer = customer;
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
    if (changes.customerId) {
      const customer = await this.customerRepo.findOne(changes.customerId);
      invoice.customer = customer;
    }
    // if (changes.productsIds) {
    //   const products = await this.productRepo.findByIds(changes.productsIds);
    //   invoice.products = products;
    // }
    return this.invoiceRepo.save(invoice);
  }

  // async removeProductByInvoice(invoiceId: number, productId: number) {
  //   const invoice = await this.invoiceRepo.findOne(invoiceId, {
  //     relations: ['products'],
  //   });
  //   invoice.products = invoice.products.filter((item) => item.id !== productId);
  //   return this.invoiceRepo.save(invoice);
  // }

  // async addProductToInvoice(invoiceId: number, productId: number) {
  //   const invoice = await this.invoiceRepo.findOne(invoiceId, {
  //     relations: ['products'],
  //   });
  //   if (!invoice) {
  //     throw new NotFoundException(`Invoice #${invoiceId} not found`);
  //   }
  //   const product = await this.productRepo.findOne(productId);
  //   if (!product) {
  //     throw new NotFoundException(`Product #${productId} not found`);
  //   }
  //   invoice.products.push(product);
  //   return this.invoiceRepo.save(invoice);
  // }

  remove(id: number) {
    return this.invoiceRepo.delete(id);
  }
}
