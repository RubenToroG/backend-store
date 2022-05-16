import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from 'src/users/entities/users.entity';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'correo@prueba.com',
      image: '',
    },
  ];
}
