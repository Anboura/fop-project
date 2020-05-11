import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadingStrategy,
  PreloadAllModules,
} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthguardService } from "./services/authguard.service";
import { AuthenticationComponent } from "./authentication/authentication.component";

const routes: Routes = [
  { path: "", canActivate: [AuthguardService], component: HomeComponent },
  {
    path: "finances",
    loadChildren: "./feature/finance/finance.module#FinanceModule",
  },
  {
    path: "planifications",
    canActivate: [AuthguardService],
    component: HomeComponent,
  },
  {
    path: "objectifs",
    canActivate: [AuthguardService],
    component: HomeComponent,
  },
  { path: "authentication", component: AuthenticationComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
