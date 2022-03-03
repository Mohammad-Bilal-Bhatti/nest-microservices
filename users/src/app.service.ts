import { Injectable, Logger } from '@nestjs/common';

export interface User {
  id?: number;
  name: string;
  surname: string;
}

@Injectable()
export class AppService {
  private users: User[] = [{ id: 1, name: 'tahir', surname: 'maggsi' }];
  private nextId = 2;

  private logger = new Logger('UserService');

  getUsersList(): User[] {
    this.logger.log('get users list');
    return this.users;
  }

  addUser(user: User): User {
    this.logger.log('add to users list');
    const muser = {
      id: this.nextId++,
      name: user.name,
      surname: user.surname,
    };
    this.users.push(muser);
    return muser;
  }
}
