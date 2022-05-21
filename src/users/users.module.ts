import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { ProductModule } from './../products/products.module';
import { User } from './entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ProductModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
