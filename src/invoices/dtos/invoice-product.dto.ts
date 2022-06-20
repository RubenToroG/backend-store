import { IsNumber, IsNotEmpty, IsPositive } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceProductDto {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly invoiceId: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly productId: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly quantity: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly discount: number;
}
export class UpdateInvoiceProductDto extends PartialType(
  CreateInvoiceProductDto,
) {}
