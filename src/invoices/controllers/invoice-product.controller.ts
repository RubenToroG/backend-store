import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateInvoiceProductDto } from '../dtos/invoice-product.dto';
import { InvoiceProductService } from '../services/invoice-product.service';

@ApiTags('Invoice-Product')
@Controller('invoice-product')
export class InvoiceProductController {
  constructor(private invoiceProductService: InvoiceProductService) {}

  @Post()
  create(@Body() payload: CreateInvoiceProductDto) {
    return this.invoiceProductService.create(payload);
  }
}
