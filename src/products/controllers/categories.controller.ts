import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CategoryService } from '../services/category.service';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoryService: CategoryService) {}

  @Get(':categoryId')
  @ApiOperation({ summary: 'List of categories' })
  @HttpCode(HttpStatus.ACCEPTED)
  getCategory(@Param('productId', ParseIntPipe) categoryId: number) {
    return this.categoryService.findOne(categoryId);
  }
}
