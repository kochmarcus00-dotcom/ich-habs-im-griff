export interface Thought {
  id: string;
  slug: string;

  title: string;

  emotion: string;

  priority: number;

  icon?: string;

  color?: string;

  search: string[];

  related: string[];

  content: string;
}