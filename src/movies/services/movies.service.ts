import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Movie } from './../entities/movie.entity';
import { CreateMovieDto, UpdateMovieDto } from './../dtos/movies.dtos';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie, 'databaseHeroku')
    private movieRepo: Repository<Movie>,
  ) {}

  findAll() {
    return this.movieRepo.find();
  }

  async findOne(id: number) {
    const movie = await this.movieRepo.findOne({ id });
    if (!movie) {
      throw new NotFoundException(`Movie #${id} not found`);
    }
    return movie;
  }

  create(data: CreateMovieDto) {
    const newMovie = this.movieRepo.create(data);
    return this.movieRepo.save(newMovie);
  }

  async update(id: number, changes: UpdateMovieDto) {
    const movie = await this.movieRepo.findOne({ id });
    this.movieRepo.merge(movie, changes);
    return this.movieRepo.save(movie);
  }

  remove(id: number) {
    return this.movieRepo.delete(id);
  }
}
