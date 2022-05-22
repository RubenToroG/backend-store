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

  @Post()
  create(@Body() payload: CreateInvoiceDto) {
    return this.invoiceService.create(payload);
  }
}
