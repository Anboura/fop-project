import { Component, OnInit } from "@angular/core";
import { ExpenseService } from "src/app/services/expense.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-expense",
  templateUrl: "./expense.component.html",
  styleUrls: ["./expense.component.css"],
})
export class ExpenseComponent implements OnInit {
  expense: any;
  dataTableTtitle: string;
  constructor(
    private expenseService: ExpenseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = 0;
    this.route.params.subscribe((data: Params) => (id = +data["id"]));
    this.expense = this.expenseService.getExpenseById(id);
    this.expenseService.getCategoryExpenseDonuts(id);
    this.dataTableTtitle = `Details ${this.expense.category.label} Avril 2020`;
    console.log(this.expense);
  }
}
