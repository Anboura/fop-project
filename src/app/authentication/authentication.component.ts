import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { User } from "../models/User";
import { Observable } from "rxjs";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"],
})
export class AuthenticationComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}
  login() {
    this.authenticationService.login(new User(this.email, this.password));

    // TODO NAVIGATE TO HOME PAGE
  }

  signUp() {
    this.authenticationService.signUp(this.email, this.password).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
