import { Component, OnInit } from "@angular/core";
import { ExpenseService } from "src/app/services/expense.service";

@Component({
  selector: "app-expenses",
  templateUrl: "./expenses.component.html",
  styleUrls: ["./expenses.component.css"],
})
export class ExpensesComponent implements OnInit {
  date = "Avril 2020";

  expenses: any;
  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenses = this.expenseService.getExpensesList();
    this.initCategoriesExpenses();
  }
  initCategoriesExpenses() {
    this.expenses.forEach((expense) =>
      this.constructCategoryExpenseDonuts(expense)
    );
  }

  constructCategoryExpenseDonuts(expense) {
    // "#40514e" "#2cb978", "#36A2EB", "#FF6384"]
    const categoryExpenseChart = this.expenseService.getCategoryExpenseDonuts(
      expense.id
    );
    expense.categoryExpenseChart = categoryExpenseChart;
  }
}
