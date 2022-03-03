import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('gateway')
export class AppController {
  constructor(@Inject('NATS_SERVER') private client: ClientProxy) {}

  private logger = new Logger(AppController.name);

  @Get('users')
  getUsers() {
    this.logger.log('get users');
    // return 'users';
    return this.client.send('get_users', {});
  }

  @Get('repos')
  getRepos() {
    this.logger.log('get repos');
    return this.client.send('get_repos', {});
  }

  @Get('notify')
  notifyUser() {
    this.logger.log('get notify user');
    return this.client.emit('notification', { id: 1 });
  }
}
