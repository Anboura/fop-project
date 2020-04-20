import { Article } from "./Article";
import { Service } from "./Service";

export class Expense {
  id: number;
  label: string;
  amount: number;
  priority: string;
  date: string;
  period: string;
  articles: Article[];
  services: Service[];

  constructor() {}
}
