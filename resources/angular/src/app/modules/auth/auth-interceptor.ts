import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpStatusCode, HttpResponse } from "@angular/common/http";
// import { TokenService } from "../shared/token.service";
// import { AuthStateService } from "./auth-state.service";
import { Router } from "@angular/router";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";
import { AuthService } from "./auth.service";
// import { NgxSpinnerService } from "ngx-spinner";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
        // private authStateService: AuthStateService,
        private router: Router,
        // private spinner: NgxSpinnerService
        ) 
        
    { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // this.spinner.show();
        const accessToken = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + accessToken
            }
        });
        return next.handle(req).pipe(
            map(event => {
                if (event instanceof HttpResponse) {
                //    this.spinner.hide();
                }         
                return event;
            }),
            catchError((err) => {
            // this.spinner.hide();
            if (err.status === HttpStatusCode.Unauthorized) {
                this.router.navigate(['login']); // go to login page, 401
            }
            return throwError(err);
          }));
    }
}