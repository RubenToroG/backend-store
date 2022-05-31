import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';
import { Invoice } from 'src/invoices/entities/invoices.entity';
import { Movie } from 'src/movies/entities/movie.entity';
import { Product } from 'src/products/entities/product.entity';
import { Customer } from 'src/users/entities/customer.entity';
import { User } from 'src/users/entities/users.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService, config.KEY],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        database: configService.get<string>('POSTGRES_DB'),
        port: configService.get<number>('POSTGRES_PORT'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        username: configService.get<string>('POSTGRES_USER'),
        host: configService.get<string>('POSTGRES_HOST'),
        synchronize: false,
        entities: [User, Invoice, Product, Customer],
      }),
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        database: configService.get<string>('HEROKU_DB'),
        port: configService.get<number>('HEROKU_PORT'),
        password: configService.get<string>('HEROKU_PASSWORD'),
        username: configService.get<string>('HEROKU_USER'),
        host: configService.get<string>('HEROKU_HOST'),
        synchronize: true,
        logging: true,
        entities: [Movie],
        name: 'databaseHeroku',
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }),
      imports: [ConfigModule],
      name: 'databaseHeroku',
    }),
    // TypeOrmModule.forFeature([Movie], 'moviesDbHeroku'),
  ],
  // imports: [
  //   TypeOrmModule.forRootAsync({
  //     inject: [config.KEY],
  //     useFactory: (configService: ConfigType<typeof config>) => {
  //       const { user, host, dbName, password, port } = configService.postgres;
  //       return {
  //         type: 'postgres',
  //         host,
  //         port,
  //         username: user,
  //         password,
  //         database: dbName,
  //         synchronize: false,
  //         entities: [User, Invoice, Product, Customer, Movie],
  //       };
  //     },
  //   }),

  //   TypeOrmModule.forRootAsync({
  //     inject: [config.KEY],
  //     useFactory: (configService: ConfigType<typeof config>) => {
  //       const { user, host, dbName, password, port } =
  //         configService.postgresHeroku;
  //       return {
  //         type: 'postgres',
  //         name: 'moviesDbHeroku',
  //         host,
  //         port,
  //         username: user,
  //         password,
  //         database: dbName,
  //         entities: [Movie],
  //         synchronize: true,
  //         ssl: {
  //           require: true,
  //           rejectUnauthorized: false,
  //         },
  //       };
  //     },
  //     imports: [ConfigModule],
  //     name: 'moviesDbHeroku',
  //   }),
  //   TypeOrmModule.forFeature([Movie], 'bd2'),
  // ],
  exports: [TypeOrmModule],
  providers: [],
})
export class DatabaseModule {}
