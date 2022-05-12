import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Pol } from './pol';

@Injectable({
  providedIn: 'root'
})
export class PolService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Pol[]> {
    return this.httpClient.post<Pol[]>(`${environment.api_url}/datatable/pol`,dtParams)
  }
  all(): Observable<Pol[]> {
    return this.httpClient.get<Pol[]>(`${environment.api_url}/pol`);
  }
  find(id:any): Observable<Pol> {
    return this.httpClient.get<Pol>(`${environment.api_url}/pol/${id}`)
  }
  getAktivnipol(): Observable<Pol> {
    return this.httpClient.post<Pol>(`${environment.api_url}/pol/aktivni`,{})
  }
  store(pol): Observable<Pol> {
    return this.httpClient.post<Pol>(`${environment.api_url}/pol`, JSON.stringify(pol), this.httpOptions)
  }
  update(id:any, pol): Observable<Pol> {
    return this.httpClient.put<Pol>(`${environment.api_url}/pol/${id}`, JSON.stringify(pol), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Pol>(`${environment.api_url}/pol/${id}`, this.httpOptions)
  }
}
