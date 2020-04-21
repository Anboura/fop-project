import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FinanceMainComponent } from "./finance-main/finance-main.component";
import { ExpensesComponent } from "./expenses/expenses.component";
import { ExpenseComponent } from "./expenses/expense/expense.component";
import { AuthguardService } from "src/app/services/authguard.service";
const routes = [
  {
    path: "finances",
    canActivate: [AuthguardService],
    component: FinanceMainComponent,
  },
  {
    path: "finances/expenses",
    canActivate: [AuthguardService],
    component: ExpensesComponent,
  },
  {
    path: "finances/expenses/:id",
    canActivate: [AuthguardService],
    component: ExpenseComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceRoutingModule {}
