import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"],
})
export class AuthenticationComponent implements OnInit {
  username: string;
  password: string;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.authenticationService.login(this.username, this.password);
    // console.log(this.username, this.password);
  }
}
