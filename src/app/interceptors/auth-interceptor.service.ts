import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
} from "@angular/common/http";
import { AuthenticationService } from "../services/authentication.service";
import { take, exhaustMap, map } from "rxjs/operators";
import { of, from, zip, interval } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.userAuthSubject.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        } else {
          let modifiedRequest = req.clone({
            params: new HttpParams().set("auth", user.idToken),
          });
          console.log("The Request Url : " + modifiedRequest.params);
          return next.handle(modifiedRequest);
        }
      })
    );
  }
  //! Remove this methode
  //   observableToRemove() {
  //  // Example : pour chaqune des valeurs des observable age, name et isDev  fusionner le resultat  dans un objet
  //  let ageObs = of<number>(27, 25, 29);
  //  let nameObs = of<string>('A', 'B', 'C');
  //  let isDevObs = of<boolean>(true, true, false);
  //  zip(ageObs,nameObs, isDevObs).pipe(
  //    map(([age, name, isDev]) => ({age, name, isDev}))
  //    ).subscribe(value => console.log(value));
  //  // outputs
  //  // { age: 27, name: 'A', isDev: true }
  //  // { age: 25, name: 'B', isDev: true }
  //  // { age: 29, name: 'C', isDev: false }

  //  const myObservableArray = from([1,2,3,4,5,9]);
  //  const cityArray = ["Paris", "London", "Rome"];
  //  zip(from(cityArray), interval(1000)).pipe(
  //    map(([city]) => city)
  //   }
}
