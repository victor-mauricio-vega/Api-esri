import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProject } from './user_project.entity';

@Injectable()
export class UserProjectService {
  constructor(
    @InjectRepository(UserProject)
    private userProjectRepository: Repository<UserProject>,
  ) {}

  async create(userProject: UserProject): Promise<UserProject> {
    return this.userProjectRepository.save(userProject);
  }

  async findAll(): Promise<UserProject[]> {
    return this.userProjectRepository.find();
  }

  async findOne(id: string): Promise<UserProject> {
    return this.userProjectRepository.findOneBy({ user_project_id: id });
  }
}
