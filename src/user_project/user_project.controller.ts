import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserProjectService } from './user_project.service';
import { UserProject } from './user_project.entity';

@Controller('user-projects')
export class UserProjectController {
  constructor(private readonly userProjectService: UserProjectService) {}

  @Post()
  create(@Body() userProject: UserProject) {
    return this.userProjectService.create(userProject);
  }

  @Get()
  findAll() {
    return this.userProjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProjectService.findOne(id);
  }
}
