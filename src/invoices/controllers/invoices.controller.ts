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
import { ApiTags } from '@nestjs/swagger';

import { InvoicesService } from '../services/invoices.service';
import { CreateInvoiceDto, UpdateInvoiceDto } from '../dtos/invoice.dto';

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

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.invoiceService.remove(id);
  }
}
