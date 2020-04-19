import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FinanceRoutingModule } from "./finance-routing.module";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { FinanceMainComponent } from './finance-main/finance-main.component';

@NgModule({
  declarations: [FinanceMainComponent],
  imports: [SharedModule, FinanceRoutingModule],
})
export class FinanceModule {}
