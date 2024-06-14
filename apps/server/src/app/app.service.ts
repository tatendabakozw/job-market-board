import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from '../models/project.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Project)
    private userModel: typeof Project
  ) {}

  async createProject(
    name: string,
    description: string,
    progress: number
  ): Promise<Project> {
    return this.userModel.create({ name, description, progress });
  }

  async findAllProjects(): Promise<Project[]> {
    return this.userModel.findAll();
  }
  getSingleProject(): { message: string } {
    return { message: 'Hello API' };
  }
}
