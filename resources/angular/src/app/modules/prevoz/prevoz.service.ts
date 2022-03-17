import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Prevoz } from './prevoz';

@Injectable({
  providedIn: 'root'
})
export class PrevozService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Prevoz[]> {
    return this.httpClient.post<Prevoz[]>(`${environment.api_url}/datatable/hotel`,dtParams)
  }
  all(): Observable<Prevoz[]> {
    return this.httpClient.get<Prevoz[]>(`${environment.api_url}/hotel`);
  }
  find(id:any): Observable<Prevoz> {
    return this.httpClient.get<Prevoz>(`${environment.api_url}/hotel/${id}`)
  }
  store(hotel): Observable<Prevoz> {
    return this.httpClient.post<Prevoz>(`${environment.api_url}/hotel`, JSON.stringify(hotel), this.httpOptions)
  }
  update(id:any, hotel): Observable<Prevoz> {
    return this.httpClient.put<Prevoz>(`${environment.api_url}/hotel/id`, JSON.stringify(hotel), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Prevoz>(`${environment.api_url}/hotel/${id}`, this.httpOptions)
  }
}
