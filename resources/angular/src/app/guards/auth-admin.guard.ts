import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/modules/auth/auth.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.auth.signin()
        .pipe(
          map((e) => {
            this.auth.handleData(e);
            if (e) {
              return this.auth.getUser().user_type=="admin";
            }
        }),
        catchError((err) => {
          this.router.navigate(['/login']);
          return of(false);
        }));
    return true;
  }
  
}
