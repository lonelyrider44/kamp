import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpStatusCode, HttpResponse } from "@angular/common/http";
// import { TokenService } from "../shared/token.service";
// import { AuthStateService } from "./auth-state.service";
import { Router } from "@angular/router";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { LoadingBarService } from "@ngx-loading-bar/core";
// import { NgxSpinnerService } from "ngx-spinner";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
        // private authStateService: AuthStateService,
        private router: Router,
        // private spinner: NgxSpinnerService
        private loading: LoadingBarService
        ) 
        
    { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // this.spinner.show();
        this.loading.start();
        const accessToken = this.authService.getToken();
        const user_type = this.authService.getUserType() ?? "";
        // const user_type = "";
        // const guard = "";
        // if(user){
        //     guard = user
        // }
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + accessToken,
                guard: user_type
            }
        });
        return next.handle(req).pipe(
            map(event => {
                if (event instanceof HttpResponse) {
                //    this.spinner.hide();
                this.loading.stop();
                }         
                return event;
            }),
            catchError((err) => {
            // this.spinner.hide();
            this.loading.stop();
            if (err.status === HttpStatusCode.Unauthorized) {
                this.router.navigate(['login']); // go to login page, 401
            }
            return throwError(err);
          }));
    }
}