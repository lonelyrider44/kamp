import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Smena } from './smena';

@Injectable({
  providedIn: 'root'
})
export class SmenaService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Smena[]> {
    return this.httpClient.post<Smena[]>(`${environment.api_url}/datatable/smena`,dtParams)
  }
  all(kamp_id:any = null): Observable<Smena[]> {
    return this.httpClient.get<Smena[]>(`${environment.api_url}/smena`);
  }
  find(id:any): Observable<Smena> {
    return this.httpClient.get<Smena>(`${environment.api_url}/smena/${id}`)
  }
  store(kamp): Observable<Smena> {
    return this.httpClient.post<Smena>(`${environment.api_url}/smena`, JSON.stringify(kamp), this.httpOptions)
  }
  update(id:any, kamp): Observable<Smena> {
    return this.httpClient.put<Smena>(`${environment.api_url}/smena/${id}`, JSON.stringify(kamp), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Smena>(`${environment.api_url}/smena/${id}`, this.httpOptions)
  }
}
