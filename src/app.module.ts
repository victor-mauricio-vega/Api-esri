import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { UserProjectModule } from './user_project/user_project.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api',
      entities: [],
      synchronize: true, 
    }),
    EnterpriseModule,
    ProjectModule,
    UserModule,
    UserProjectModule,
  ],
})
export class AppModule {}
