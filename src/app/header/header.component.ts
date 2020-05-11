import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { Router } from "@angular/router";
import { FinanceMainComponent } from "../feature/finance/finance-main/finance-main.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isUserAuthenticated: boolean = false;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authenticationService.userAuthSubject.subscribe((data) => {
      // Todo must check token validity
      if (data) {
        this.isUserAuthenticated = true;
      }
    });
  }
  logout() {
    this.isUserAuthenticated = false;
    this.authenticationService.logout();
    this.router.navigate(["/authentication"]);
  }
  //! Remove
  // showMyComponent () {
  //   // Cretion d'une component factory apartir de 17:38
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(FinanceMainComponent);
  //   // Indiquer l'endroit dans le composant ou sera injecter notre composant en utilisatn l'instance public de viewContainerRef
  //   // qui est exposé par notre custom directive et qui est placer dans le DOM de façon à nous indiquer ou injecter le componenet
  //   const hostViewConterRef = this.alertHost.viewContainerRef;
  //   // permet de clear ce qui a été render par angular au par avant avant de render de nouvelles choses
  //   hostViewConterRef.clear();
  //   // creation d'un componenet en utilisant la fonction createComponent sur l'objet factory pour creer un component dans l'endroit indiqué
  //   hostViewConterRef.createComponent(componentFactory);
  //   //Pour

  // }
}
