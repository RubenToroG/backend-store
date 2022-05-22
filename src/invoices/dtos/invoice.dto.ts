import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly number: string;

  @IsString()
  @ApiProperty()
  readonly concept: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly userId: number;
}

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {}
