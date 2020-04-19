import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { FinanceRoutingModule } from "./feature/finance/finance-routing.module";
import { FinanceModule } from "./feature/finance/finance.module";
import { ObjectifModule } from "./feature/objectif/objectif.module";
import { PlanificationModule } from "./feature/planification/planification.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FinanceModule,
    ObjectifModule,
    PlanificationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
