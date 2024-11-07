import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProject } from './user_project.entity';
import { UserProjectService } from './user_project.service';
import { UserProjectController } from './user_project.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserProject])],
  providers: [UserProjectService],
  controllers: [UserProjectController],
})
export class UserProjectModule {}
