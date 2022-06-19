import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entities/users.entity';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { Customer } from './entities/customer.entity';
import { ProductModule } from './../products/products.module';
import { Invoice } from 'src/invoices/entities/invoices.entity';
import { InvoiceItem } from 'src/invoices/entities/invoice-product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Customer, Invoice, InvoiceItem]),
    ProductModule,
  ],
  controllers: [UsersController, CustomersController],
  providers: [UsersService, CustomersService],
  exports: [UsersService, CustomersService, TypeOrmModule],
})
export class UsersModule {}
