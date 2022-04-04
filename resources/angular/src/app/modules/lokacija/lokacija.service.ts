import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Lokacija } from './lokacija';

@Injectable({
  providedIn: 'root'
})
export class LokacijaService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Lokacija[]> {
    return this.httpClient.post<Lokacija[]>(`${environment.api_url}/datatable/lokacija`,dtParams)
  }
  all(): Observable<Lokacija[]> {
    return this.httpClient.get<Lokacija[]>(`${environment.api_url}/lokacija`);
  }
  find(id:any): Observable<Lokacija> {
    return this.httpClient.get<Lokacija>(`${environment.api_url}/lokacija/${id}`)
  }
  store(lokacija): Observable<Lokacija> {
    return this.httpClient.post<Lokacija>(`${environment.api_url}/lokacija`, JSON.stringify(lokacija), this.httpOptions)
  }
  update(id:any, lokacija): Observable<Lokacija> {
    return this.httpClient.put<Lokacija>(`${environment.api_url}/lokacija/id`, JSON.stringify(lokacija), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Lokacija>(`${environment.api_url}/lokacija/${id}`, this.httpOptions)
  }
}
