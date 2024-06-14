export interface ProjectItemProps {
  name: string;
  description: string;
  progress: number;
  status: 'pending' | 'finished' | 'in-progress';
  _id?: string;
  createdAt: number;
  percentage: number;
}
