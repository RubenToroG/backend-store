import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InvoicesController } from './controllers/invoices.controller';
import { InvoicesService } from './services/invoices.service';
import { Invoice } from './entities/invoices.entity';
import { UsersModule } from 'src/users/users.module';
import { ProductModule } from 'src/products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice]), UsersModule, ProductModule],
  controllers: [InvoicesController],
  providers: [InvoicesService],
  exports: [InvoicesService],
})
export class InvoiceModule {}
