export interface ICategorySelectProps {
  selectedCategory: string | null;
  onChange: (category: string) => void;
}

export interface ICategory {
  id: number;
  name: string;
  children?: ICategory[];
}