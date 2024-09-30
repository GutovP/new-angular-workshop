import { ThemeAutor} from './theme-author';

export interface Theme {
  subscribers: string[];
  posts: string[];
  _id: string;
  themeName: string;
  userId: ThemeAutor;
  created_at: string;
  updatedAt: string;
  __v: number;
}
