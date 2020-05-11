import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FinanceRoutingModule } from "./finance-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { FinanceMainComponent } from "./finance-main/finance-main.component";
import { ChartModule } from "primeng/chart";
import { FinanceDataTableComponent } from "./finance-data-table/finance-data-table.component";

import { ExpensesComponent } from "./expenses/expenses.component";
import { ExpenseComponent } from "./expenses/expense/expense.component";

@NgModule({
  declarations: [
    FinanceMainComponent,
    FinanceDataTableComponent,
    ExpensesComponent,
    ExpenseComponent,
  ],
  imports: [SharedModule, FinanceRoutingModule, ChartModule],
})
export class FinanceModule {}
