import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Kamp } from './kamp';

@Injectable({
  providedIn: 'root'
})
export class KampService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Kamp[]> {
    return this.httpClient.post<Kamp[]>(`${environment.api_url}/datatable/kamp`,dtParams)
  }
  all(): Observable<Kamp[]> {
    return this.httpClient.get<Kamp[]>(`${environment.api_url}/kamp`);
  }
  find(id:any): Observable<Kamp> {
    return this.httpClient.get<Kamp>(`${environment.api_url}/kamp/${id}`)
  }
  getAktivniKamp(): Observable<Kamp> {
    return this.httpClient.post<Kamp>(`${environment.api_url}/kamp/aktivni`,{})
  }
  store(kamp): Observable<Kamp> {
    return this.httpClient.post<Kamp>(`${environment.api_url}/kamp`, JSON.stringify(kamp), this.httpOptions)
  }
  update(id:any, kamp): Observable<Kamp> {
    return this.httpClient.put<Kamp>(`${environment.api_url}/kamp/${id}`, JSON.stringify(kamp), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Kamp>(`${environment.api_url}/kamp/${id}`, this.httpOptions)
  }
}
