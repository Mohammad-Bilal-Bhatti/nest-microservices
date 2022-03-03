import { Injectable, Logger } from '@nestjs/common';

export interface Repo {
  id?: number;
  author: number;
  name: string;
  languages: string[];
}

@Injectable()
export class AppService {
  private repos: Repo[] = [
    { id: 1, author: 1, name: 'open-linux', languages: ['c', 'perl', 'ruby'] },
  ];
  private nextId: 2;

  private logger = new Logger('RepoService');

  getUserRepo(): Repo[] {
    this.logger.log('get user repo');
    return this.repos;
  }

  addRepo(repo: Repo): Repo {
    this.logger.log('add to user repo');
    const mrepo = {
      id: this.nextId++,
      author: repo.author,
      name: repo.name,
      languages: repo.languages,
    };
    this.repos.push(mrepo);
    return repo;
  }
}
