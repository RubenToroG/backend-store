import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import {
  CreateInvoiceProductDto,
  UpdateInvoiceProductDto,
} from '../dtos/invoice-product.dto';
import { Invoice } from '../entities/invoices.entity';
import { InvoiceItem } from '../entities/invoice-product.entity';
import { Product } from '../../products/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InvoiceItemService {
  constructor(
    @InjectRepository(Invoice) private invoiceRepo: Repository<Invoice>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(InvoiceItem)
    private invoiceItemRepo: Repository<InvoiceItem>,
  ) {}

  async create(data: CreateInvoiceProductDto) {
    const invoiceItem = new InvoiceItem();
    if (data.invoiceId) {
      const invoice = await this.invoiceRepo.findOne(data.invoiceId);
      invoiceItem.invoice = invoice;
      if (!invoice) {
        throw new Error(`Invoice #${data.invoiceId} not found`);
      }
    }
    if (data.productId) {
      const product = await this.productRepo.findOne(data.productId);
      invoiceItem.product = product;
      if (!product) {
        throw new Error(`Product #${data.productId} not found`);
      }
    }
    if (data.quantity) {
      invoiceItem.quantity = data.quantity;
    } else {
      throw new Error('Quantity is required');
    }
    return this.invoiceItemRepo.save(invoiceItem);
  }
}
