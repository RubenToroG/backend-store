import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MoviesController } from './controllers/movies.controller';
import { MoviesService } from './services/movies.service';
import { Movie } from './entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie], 'databaseHeroku')],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesService, TypeOrmModule],
})
export class MoviesModule {}
