import { Project } from '../project/entities/project.entity';

export const catsProviders = [
  {
    provide: 'CATS_REPOSITORY',
    useValue: Project,
  },
];
