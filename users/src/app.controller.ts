import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';
import { AppService, User } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private logger = new Logger('UserController');

  @MessagePattern('get_users')
  getUsers(@Ctx() context: NatsContext): User[] {
    this.logger.log(`Subject: ${context.getSubject()}`);
    return this.appService.getUsersList();
  }

  @MessagePattern('add_user')
  addUsers(@Payload() data: User, @Ctx() context: NatsContext): User {
    this.logger.log(`Subject: ${context.getSubject()}`);
    this.logger.log(`Data: ${data}`);
    const user = { name: '...', surname: '...' };
    return this.appService.addUser(user);
  }

  @EventPattern('notification')
  notifyUser(@Payload() data: any, @Ctx() context: NatsContext) {
    this.logger.log(`Subject: ${context.getSubject()}`);
    this.logger.log(`Notified successfully sent to user with id: ${data.id}`);
  }
}
