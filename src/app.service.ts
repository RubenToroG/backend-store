import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';

import config from './config';

@Injectable()
export class AppService {
  // constructor() //@Inject('PG') private clientPg: Client,
  // //@Inject('TASK') private task: any[],
  // //@Inject(config.KEY) private configService: ConfigType<typeof config>,
  // {}
}
