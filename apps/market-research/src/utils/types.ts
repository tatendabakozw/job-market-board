export interface ProjectItemProps {
  name: string;
  description: string;
  assigned_researcher?: string;
  progress: number;
  status: 'pending' | 'finished' | 'in-progress' | 'failed';
  _id?: string;
  createdAt: number;
  percentage: number;
  Icon?: any;
  link?: string;
}

export interface UserProps {
  email: string;
  token: string;
  photoURL: string;
  role: string;
  emailVerified: boolean;
  username: boolean;
  _id: string;
  company: {
    name: string;
    logo: string;
  };
}

export interface ContextType {
  darkMode: boolean;
  userInfo: UserProps;
  search_query: string;
  dispatch?: any;
  state?: any;
}

export interface SelectItemProps {
  name?: string;
  slug?: string;
  _id?: string;
}
