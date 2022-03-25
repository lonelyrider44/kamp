import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from 'app/modules/korisnik/korisnik';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private issuer = {}
  private user: Korisnik = null;

  constructor(private http: HttpClient) {
    this.issuer = {
    login: environment.api_url + '/login',
    register: environment.api_url + '/register'
    }
  }

  handleData(data:any) {
    // console.log(data.access_token);
    this.user = data.user;
    localStorage.setItem('auth_token', data.access_token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }
  getUser(){
    if( !this.isValidToken()){
      this.user = null;
    }
    return this.user;
  }

  // Verify the token
  isValidToken() {
    const token = this.getToken();

    if (token) {
      // console.log('token exits');
      const payload = this.payload(token);
      if (payload) {
        return this.user && Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : !this.removeToken();
      }
    } else {
      return false;
    }
    return false;
  }

  payload(token:any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(window.atob(jwtPayload));
    // return JSON.parse(new Buffer(jwtPayload, 'base64').toString('binary'));
  }

  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
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
  signin(user: Korisnik): Observable<any> {
    return this.http.post<any>(environment.api_url+'/login', user);
  }

  // Access user profile
  profileUser(): Observable<Korisnik> {
    return this.http.post<Korisnik>(environment.api_url+'/api/profile',{});
  }
  // Logout
  logout(): Observable<any> {
    // console.log('logout');
    return this.http.post<any>(environment.api_url+'/logout',{});
  }
}
