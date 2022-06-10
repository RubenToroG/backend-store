import {
  IsString,
  IsNumber,
  IsArray,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly number: string;

  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly userId: number;

  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly customerId: number;

  @IsPositive()
  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  readonly productsIds: number[];
}

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {}
