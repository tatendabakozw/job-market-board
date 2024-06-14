import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { databaseProviders } from '../providers/database.providers';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class ProjectModule {}
