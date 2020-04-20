import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FinanceMainComponent } from "./finance-main/finance-main.component";
const routes = [{ path: "finances", component: FinanceMainComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceRoutingModule {}
