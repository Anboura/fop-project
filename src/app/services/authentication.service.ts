import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  loggedIn = false;
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }
  login(user: string, password: string) {
    if (user === "ilias" && password === "bouras") {
      this.loggedIn = true;
    }
  }
  logout() {
    this.loggedIn = false;
  }
}
