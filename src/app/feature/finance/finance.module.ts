import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FinanceRoutingModule } from "./finance-routing.module";
import { SharedModule } from "src/app/shared/shared/shared.module";

@NgModule({
  declarations: [],
  imports: [SharedModule, FinanceRoutingModule],
})
export class FinanceModule {}
