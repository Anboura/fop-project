import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthguardService implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    stat: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean> | boolean {
    return this.authenticationService.userAuthSubject.pipe(
      map((user) => {
        return !!user;
        // return this.router.createUrlTree(["/authentication"]);
      }),
      tap((isAuth) => {
        if (!!isAuth) {
          return true;
        } else {
          this.router.navigate(["/authentication"]);
        }
      })
    );
  }
}

// return this.authenticationService.userAuthSubject.pipe(
//   map((user) => {
//     const isAuth = !!user;
//     if (isAuth) {
//       return true;
//     }
//     return this.router.createUrlTree(["/authentication"]);
//   })
// );
