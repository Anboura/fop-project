import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthguardService } from "./services/authguard.service";
import { AuthenticationComponent } from "./authentication/authentication.component";

const routes: Routes = [
  { path: "", canActivate: [AuthguardService], component: HomeComponent },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
