import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateInvoiceProductDto } from '../dtos/invoice-product.dto';
import { InvoiceItemService } from '../services/invoice-product.service';

@ApiTags('Invoice-Item')
@Controller('invoice-item')
export class InvoiceItemController {
  constructor(private invoiceItemService: InvoiceItemService) {}

  @Post()
  create(@Body() payload: CreateInvoiceProductDto) {
    return this.invoiceItemService.create(payload);
  }
}
