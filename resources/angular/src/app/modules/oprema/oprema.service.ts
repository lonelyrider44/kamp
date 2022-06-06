import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Oprema } from './oprema';

@Injectable({
  providedIn: 'root'
})
export class OpremaService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Oprema[]> {
    return this.httpClient.post<Oprema[]>(`${environment.api_url}/datatable/oprema`,dtParams)
  }
  all(): Observable<Oprema[]> {
    return this.httpClient.get<Oprema[]>(`${environment.api_url}/hotel`);
  }
  find(id:any): Observable<Oprema> {
    return this.httpClient.get<Oprema>(`${environment.api_url}/hotel/${id}`)
  }
  store(hotel): Observable<Oprema> {
    return this.httpClient.post<Oprema>(`${environment.api_url}/hotel`, JSON.stringify(hotel), this.httpOptions)
  }
  update(id:any, hotel): Observable<Oprema> {
    return this.httpClient.put<Oprema>(`${environment.api_url}/hotel/id`, JSON.stringify(hotel), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Oprema>(`${environment.api_url}/hotel/${id}`, this.httpOptions)
  }
}
