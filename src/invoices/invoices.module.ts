import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InvoicesController } from './controllers/invoices.controller';
import { InvoicesService } from './services/invoices.service';
import { Invoice } from './entities/invoices.entity';
import { UsersModule } from 'src/users/users.module';
import { ProductModule } from 'src/products/products.module';
import { InvoiceItemController } from './controllers/invoice-product.controller';
import { InvoiceItemService } from './services/invoice-product.service';
import { InvoiceItem } from './entities/invoice-product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Invoice, InvoiceItem]),
    UsersModule,
    ProductModule,
  ],
  controllers: [InvoicesController, InvoiceItemController],
  providers: [InvoicesService, InvoiceItemService],
  exports: [InvoicesService, TypeOrmModule],
})
export class InvoiceModule {}
