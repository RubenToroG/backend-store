import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InvoicesController } from './controllers/invoices.controller';
import { InvoicesService } from './services/invoices.service';
import { Invoice } from './entities/invoices.entity';
import { UsersModule } from 'src/users/users.module';
import { ProductModule } from 'src/products/products.module';
import { InvoiceProductController } from './controllers/invoice-product.controller';
import { InvoiceProductService } from './services/invoice-product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice]), UsersModule, ProductModule],
  controllers: [InvoicesController, InvoiceProductController],
  providers: [InvoicesService, InvoiceProductService],
  exports: [InvoicesService, TypeOrmModule],
})
export class InvoiceModule {}
