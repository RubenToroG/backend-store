import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly original_title: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly release_year: number;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly wiki_link: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly music: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly duration: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly cover: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly banner: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly trailer: string;
}

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
