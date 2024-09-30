import { Theme } from './theme';
import { ThemeAutor } from './theme-author';

export interface Post {
  likes: string[];
  _id: string;
  text: string;
  userId: ThemeAutor;
  themeId: Theme;
  created_at: string;
  updatedAt: string;
  __v: number;
}
