import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

import { ProductModule } from './../products/products.module';

@Module({
  imports: [ProductModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
