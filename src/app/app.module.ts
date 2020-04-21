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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { SharedModule } from "./shared/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FinanceModule,
    ObjectifModule,
    PlanificationModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
