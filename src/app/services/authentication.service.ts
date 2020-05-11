import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { User } from "../models/User";
import {
  Observable,
  observable,
  throwError,
  Subject,
  BehaviorSubject,
} from "rxjs";
import { UserAuth } from "../models/UserAuth";
import { Router } from "@angular/router";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  userAuthSubject: Subject<UserAuth> = new BehaviorSubject<UserAuth>(null);
  private loggedIn = false;
  constructor(private http: HttpClient, private router: Router) {}
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
    return promise;
  }
  // Sign up function
  signUp(email: string, password: string): Observable<UserAuth> {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http
      .post<UserAuth>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCOJ05RidgvyawjIvFVQbX2XlrvXj8rz90",
        data
      )
      .pipe(catchError(this.handleErrors));
  }

  // Login Function
  login(loginData: User) {
    console.log(loginData);
    return this.http
      .post<UserAuth>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCOJ05RidgvyawjIvFVQbX2XlrvXj8rz90",
        loginData
      )
      .pipe(
        catchError(this.handleErrors),
        tap((responseData) =>
          this.manageAuthentication(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn,
            responseData.refreshToken,
            responseData.registered
          )
        )
      );
  }
  // Logout Function
  logout() {
    localStorage.clear();
    this.userAuthSubject.next(null);
  }
  //Handle Errors Function
  private handleErrors(errorResponse: HttpErrorResponse) {
    let errorMessage = "Une érreur inconnue est survenue";
    console.log(errorResponse.error.error.message);
    switch (errorResponse.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "Cet email éxiste déja";
        break;
      case "WEAK_PASSWORD : Password should be at least 6 characters":
        errorMessage = "mot de passe faible saisire au moin 6 characters";
        break;
    }
    return throwError(errorMessage);
  }
  private manageAuthentication(
    email: string,
    localId: string,
    idToken: string,
    expiresIn: number,
    refreshToken: string,
    registred: boolean
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const loggedInUser = new UserAuth(
      email,
      localId,
      idToken,
      expirationDate,
      refreshToken,
      registred,
      expiresIn
    );
    localStorage.setItem("userData", JSON.stringify(loggedInUser));
    this.userAuthSubject.next(loggedInUser);
  }
  autoLogin() {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data) {
      const loggedInUser = new UserAuth(
        data.email,
        data.localId,
        data._idToken,
        data._expirationDate,
        data.refreshToken,
        data.registred,
        data.expiresIn
      );
      this.userAuthSubject.next(loggedInUser);
    }
  }
}
