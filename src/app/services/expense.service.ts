import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ExpenseService {
  private categories = [
    { id: 1, label: "Nouriture" },
    { id: 2, label: "Abonnements" },
    { id: 3, label: "Maison" },
    { id: 4, label: "Loyer" },
  ];
  private expenses = [
    {
      id: 1,
      category: this.categories[0],
      total: 400,
      prevue: 350,
      restant: 0,
      depassement: 50,
      categoryExpenseChart: null,
    },
    {
      id: 2,
      category: this.categories[1],
      total: 100,
      prevue: 90,
      restant: 0,
      depassement: 10,
      categoryExpenseChart: null,
    },
    {
      id: 3,
      category: this.categories[2],
      total: 32,
      prevue: 45,
      restant: 7,
      depassement: 0,
      categoryExpenseChart: null,
    },
    {
      id: 4,
      category: this.categories[3],
      total: 650,
      prevue: 650,
      restant: 0,
      depassement: 0,
      categoryExpenseChart: null,
    },
  ];
  constructor() {}
  public getExpensesList() {
    return this.expenses;
  }
  public getExpenseById(id: number) {
    return this.expenses.find((expense) => expense.id == id);
  }
  constructCategoryExpenseDonuts(expense) {
    const categoryExpenseChart = expense.categoryExpenseChart
      ? expense.categoryExpenseChart
      : {
          labels: ["Consomé", "Restant", "Deppassement"],
          datasets: [
            {
              data: [expense.total, expense.restant, expense.depassement],
              backgroundColor: ["#2cb978", "#dee1ec", "#FF6384"],
              hoverBackgroundColor: ["#2cb978", "#dee1ec", "#FF6384"],
            },
          ],
        };
    expense.categoryExpenseChart = categoryExpenseChart;
    return categoryExpenseChart;
  }
  getCategoryExpenseDonuts(id: number) {
    const expense = this.getExpenseById(id);
    return expense.categoryExpenseChart
      ? expense.categoryExpenseChart
      : this.constructCategoryExpenseDonuts(expense);
  }
}
