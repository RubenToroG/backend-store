import {
  IsString,
  IsEmail,
  IsNotEmpty,
  Length,
  IsPositive,
  IsOptional,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Name of customer' })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly lastName: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly phone: string;

  @IsOptional()
  @IsPositive()
  @ApiProperty()
  readonly userId: number;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
