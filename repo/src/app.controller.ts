import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  NatsContext,
  Payload,
} from '@nestjs/microservices';
import { AppService, Repo } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private logger = new Logger('RepoController');

  @MessagePattern('get_repos')
  getRepos(@Ctx() context: NatsContext): Repo[] {
    this.logger.log(`Subject: ${context.getSubject()}`);
    return this.appService.getUserRepo();
  }

  @MessagePattern('add_repos')
  addRepo(@Payload() data: Repo, @Ctx() context: NatsContext): Repo {
    this.logger.log(`Subject: ${context.getSubject()}`);
    this.logger.log(`Data: ${data}`);
    const repo = {
      author: 1,
      name: '...',
      languages: ['nodejs', 'js', 'nestjs'],
    };
    return this.appService.addRepo(repo);
  }
}
