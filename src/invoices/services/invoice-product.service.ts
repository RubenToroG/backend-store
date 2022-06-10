import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import {
  CreateInvoiceProductDto,
  UpdateInvoiceProductDto,
} from '../dtos/invoice-product.dto';
import { Invoice } from '../entities/invoices.entity';
import { InvoiceProduct } from '../entities/invoice-product.entity';
import { Product } from '../../products/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InvoiceProductService {
  constructor(
    @InjectRepository(Invoice) private invoiceRepo: Repository<Invoice>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(InvoiceProduct)
    private invoiceProductRepo: Repository<InvoiceProduct>,
  ) {}

  async create(data: CreateInvoiceProductDto) {
    const invoice = await this.invoiceRepo.findOne(data.invoiceId);
    const product = await this.productRepo.findOne(data.productId);
    const invoiceProduct = new InvoiceProduct();

    invoiceProduct.invoice = invoice;
    invoiceProduct.product = product;
    invoiceProduct.quantity = data.quantity;

    return this.invoiceProductRepo.save(invoiceProduct);
  }
}
