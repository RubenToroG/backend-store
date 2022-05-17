import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
