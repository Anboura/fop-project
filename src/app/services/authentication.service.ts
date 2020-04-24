import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { User } from "../models/User";
import { Observable, observable } from "rxjs";
import { UserAuth } from "../models/UserAuth";
import { Router } from "@angular/router";

export interface FireBaseAuthResponseData {
  idToken: string;
  email: string;
  refreshTocken: string;
  expiresIn: string;
  localId: string;
}
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private loggedIn = false;
  constructor(private http: HttpClient, private router: Router) {}
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
    return promise;
  }
  signUp(
    email: string,
    password: string
  ): Observable<FireBaseAuthResponseData> {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http.post<FireBaseAuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCOJ05RidgvyawjIvFVQbX2XlrvXj8rz90",
      data
    );
  }
  login(loginData: User) {
    let result: UserAuth;
    console.log(loginData);
    return this.http
      .post<UserAuth>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCOJ05RidgvyawjIvFVQbX2XlrvXj8rz90",
        loginData
      )
      .subscribe(
        (data) => {
          console.log(data);
          result = data;
          this.loggedIn = true;
          this.router.navigate(["/"]);
        },
        (error) => {
          console.log(error);
          this.loggedIn = false;
        }
      );
  }
  logout() {
    this.loggedIn = false;
  }
}
