import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    // database: {
    //   name: process.env.DATABASE_NAME,
    //   port: process.env.DATABASE_PORT,
    // },
    postgres: {
      dbName: process.env.POSTGRES_DB,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      password: process.env.POSTGRES_PASSWORD,
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
    },
    postgresHeroku: {
      dbName: process.env.HEROKU_DB,
      port: parseInt(process.env.HEROKU_PORT, 10),
      password: process.env.HEROKU_PASSWORD,
      user: process.env.HEROKU_USER,
      host: process.env.HEROKU_HOST,
      type: process.env.HEROKU_CONNECTION,
    },
    apiKey: process.env.API_KEY,
  };
});
