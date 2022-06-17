import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateCategoryDto } from '../dtos/category.dtos';
import { CategoryService } from '../services/category.service';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':categoryId')
  @ApiOperation({ summary: 'List of categories' })
  @HttpCode(HttpStatus.ACCEPTED)
  getCategory(@Param('productId', ParseIntPipe) categoryId: number) {
    return this.categoryService.findOne(categoryId);
  }

  @Post()
  createCategory(@Body() payload: CreateCategoryDto) {
    return this.categoryService.create(payload);
  }
}
