import { Injectable } from "@angular/core";
import {
  HttpHandler,
  HttpRequest,
  HttpEventType,
  HttpInterceptor,
} from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LogginInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // console.log(
    //   "%cJavascript Jeep 🚙in Blue %cJavascript Jeep 🚙in red",
    //   "color:blue; font-size:50px",
    //   "color:red; font-size:50px"
    // );

    console.log(
      `%cRequest emmited to: ${req.url}`,
      "color: rgb(70, 132, 190); font-weight: bold; font-size: 0.9rem"
    );
    // rgb(59, 87, 139)
    return next.handle(req).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log(
            `%cResponse Arrived from ${event.url}, Request status: ${event.status}`,
            "color: rgb(70, 132, 190); font-weight:bold;font-size: 0.9rem"
          );
        }
      })
    );
  }

  constructor() {}
}
