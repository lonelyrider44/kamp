import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Administrator } from './administrator';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Administrator[]> {
    return this.httpClient.post<Administrator[]>(`${environment.api_url}/datatable/administrator`,dtParams)
  }
  all(): Observable<Administrator[]> {
    return this.httpClient.get<Administrator[]>(`${environment.api_url}/administrator`);
  }
  find(id:any): Observable<Administrator> {
    return this.httpClient.get<Administrator>(`${environment.api_url}/administrator/${id}`)
  }
  store(admin): Observable<Administrator> {
    return this.httpClient.post<Administrator>(`${environment.api_url}/administrator`, JSON.stringify(admin), this.httpOptions)
  }
  update(id:any, admin): Observable<Administrator> {
    return this.httpClient.put<Administrator>(`${environment.api_url}/administrator/${id}`, JSON.stringify(admin), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Administrator>(`${environment.api_url}/administrator/${id}`, this.httpOptions)
  }
}
