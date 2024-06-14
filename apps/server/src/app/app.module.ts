import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Project } from '../models/project.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'database_name',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Project]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
