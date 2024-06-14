import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Project extends Model<Project> {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  progress: number;

  @Column
  status: number;

  @Column
  assigned_researcher: string;
}
