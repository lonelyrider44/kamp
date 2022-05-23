import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Trener } from './trener';

@Injectable({
  providedIn: 'root'
})
export class TrenerService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Trener[]> {
    return this.httpClient.post<Trener[]>(`${environment.api_url}/datatable/trener`,dtParams)
  }
  all(): Observable<Trener[]> {
    return this.httpClient.get<Trener[]>(`${environment.api_url}/trener`);
  }
  find(id:any): Observable<Trener> {
    return this.httpClient.get<Trener>(`${environment.api_url}/trener/${id}`)
  }
  aktivni(): Observable<Trener> {
    return this.httpClient.post<Trener>(`${environment.api_url}/trener/aktivni`,{})
  }
  store(pol): Observable<Trener> {
    return this.httpClient.post<Trener>(`${environment.api_url}/trener`, JSON.stringify(pol), this.httpOptions)
  }
  update(id:any, pol): Observable<Trener> {
    return this.httpClient.put<Trener>(`${environment.api_url}/trener/${id}`, JSON.stringify(pol), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Trener>(`${environment.api_url}/trener/${id}`, this.httpOptions)
  }
}
