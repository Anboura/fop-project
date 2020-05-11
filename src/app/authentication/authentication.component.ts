import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy,
} from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { User } from "../models/User";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { PlaceHolderDirective } from "../shared/directives/place-holder.directive";
import { AlertComponent } from "../shared/alert/alert.component";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"],
})
export class AuthenticationComponent implements OnInit, OnDestroy {
  email: string;
  password: string;
  errorMessage: string;
  isFetchingData: boolean = false;
  errorAlertSub: Subscription;
  @ViewChild(PlaceHolderDirective, { static: false })
  errorPlaceHolder: PlaceHolderDirective;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}
  login() {
    this.isFetchingData = true;
    this.authenticationService
      .login(new User(this.email, this.password))
      .subscribe(
        (data) => {
          this.router.navigate(["/"]);
        },
        (error) => {
          this.errorMessage = error;
          this.showAlertError();
        }
      );

    // TODO NAVIGATE TO HOME PAGE
  }

  signUp() {
    this.isFetchingData = true;
    this.authenticationService.signUp(this.email, this.password).subscribe(
      (data) => {
        this.isFetchingData = false;
        console.log(data);
      },
      (error) => {
        this.errorMessage = error;
        this.showAlertError();
      }
    );
  }

  showAlertError() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    this.errorPlaceHolder.viewContainerRef.clear();
    const componentRef = this.errorPlaceHolder.viewContainerRef.createComponent(
      componentFactory
    );
    componentRef.instance.errorMessage = this.errorMessage;
    this.errorAlertSub = componentRef.instance.closeAlert.subscribe((data) => {
      this.errorPlaceHolder.viewContainerRef.clear();
      this.errorAlertSub.unsubscribe();
    });
  }
  ngOnDestroy() {
    if (this.errorAlertSub) {
      this.errorAlertSub.unsubscribe();
    }
  }
}
