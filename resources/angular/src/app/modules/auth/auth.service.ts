import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from 'app/modules/korisnik/korisnik';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private issuer = {}
  private user: Korisnik = null;

  constructor(private http: HttpClient, private location: Location) {

    if (environment.production) {
      this.issuer = {
        login: window.location.protocol + "//" + window.location.hostname + environment.api_url + '/login',
        register: environment.api_url + '/register'
      }

    } else {
      this.issuer = {
        login: environment.api_url + '/login',
        register: environment.api_url + '/register'
      }

    }

    // console.log('Service construct start')
    // console.log('Service construct end')
  }

  handleData(data: any) {
    // console.log(data.access_token);
    this.user = data.user;
    localStorage.setItem('auth_token', data.access_token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }
  getUser() {
    // console.log('Get user');
    // console.log(this.user);
    if (!this.isValidToken()) {
      this.user = null;
    }
    return this.user;
  }

  // Verify the token
  isValidToken() {
    const token = this.getToken();

    if (token) {
      // console.log('token exits');
      // console.log(this.issuer)
      const payload = this.payload(token);
      // console.log(payload.iss);
      // console.log(Object.values(this.issuer).indexOf(payload.iss));
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : !this.removeToken();
      }
    } else {
      return false;
    }
    return false;
  }

  payload(token: any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(window.atob(jwtPayload));
    // return JSON.parse(new Buffer(jwtPayload, 'base64').toString('binary'));
  }

  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
  }
  isAdmin() {
    return this.user && this.user.user_type == "admin";
  }

  // Remove token
  removeToken() {
    this.user = null;
    localStorage.removeItem('auth_token');
    return true;
  }
  // User registration
  register(user: Korisnik): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }

  // Login
  signin(user: Korisnik = null): Observable<any> {
    // console.log('Signing in...')
    return this.http.post<any>(environment.api_url + '/login', user);
    // .pipe(
    // map(res => {
    //   console.log('mapping user');
    //   console.log(res);
    //   this.handleData(res);
    //   return res;
    // }));

    // .subscribe(res => {
    //   this.handleData(res);
    //   return res;
    // });
    // );
  }

  async loadUser() {

    return await this.http.post<Korisnik>(environment.api_url + '/profile', {}).pipe(map(user => {
      this.user = user;
      // console.log('User loaded')
      return user;
    })).toPromise();
  }
  // Access user profile
  // profileUser(): Observable<Korisnik> {
  // // profileUser(): any {

  //   return this.http.post<Korisnik>(environment.api_url+'/profile',{}).pipe(map(user=> {
  //     this.user = user;
  //     return user;
  //   }));
  //   // this.user = this.http.post<Korisnik>(environment.api_url+'/api/profile',{});
  //   // .subscribe({
  //   //   then(res){
  //   //     console.log(res);
  //   //     this.user = res;
  //   //   },
  //   //   error(err){

  //   //   })
  //   // });
  // }
  // Logout
  logout(): Observable<any> {
    // console.log('logout');
    return this.http.post<any>(environment.api_url + '/logout', {});
  }
}
