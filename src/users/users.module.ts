import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entities/users.entity';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { Customer } from './entities/customer.entity';
import { ProductModule } from './../products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Customer]), ProductModule],
  controllers: [UsersController, CustomersController],
  providers: [UsersService, CustomersService],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
