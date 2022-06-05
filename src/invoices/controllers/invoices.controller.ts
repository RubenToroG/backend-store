import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { CreateInvoiceDto, UpdateInvoiceDto } from '../dtos/invoice.dto';
import { InvoicesService } from '../services/invoices.service';

@ApiTags('Invoices')
@Controller('invoices')
export class InvoicesController {
  constructor(private invoiceService: InvoicesService) {}

  @Get()
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.invoiceService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateInvoiceDto) {
    return this.invoiceService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateInvoiceDto,
  ) {
    return this.invoiceService.update(id, payload);
  }

  @Put(':id/product/:productId')
  addProductToInvoice(
    @Param('id', ParseIntPipe) id: number,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.invoiceService.addProductToInvoice(id, productId);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.invoiceService.remove(id);
  }

  @Delete(':id/product/:productId')
  deleteProduct(
    @Param('id', ParseIntPipe) id: number,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.invoiceService.removeProductByInvoice(id, productId);
  }
}
