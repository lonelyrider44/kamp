import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Izvestaj } from './izvestaj';

@Injectable({
  providedIn: 'root'
})
export class IzvestajService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Izvestaj[]> {
    return this.httpClient.post<Izvestaj[]>(`${environment.api_url}/datatable/izvestaj`,dtParams)
  }
  all(): Observable<Izvestaj[]> {
    return this.httpClient.get<Izvestaj[]>(`${environment.api_url}/izvestaj`);
  }
  find(id:any): Observable<Izvestaj> {
    return this.httpClient.get<Izvestaj>(`${environment.api_url}/izvestaj/${id}`)
  }
  store(hotel): Observable<Izvestaj> {
    return this.httpClient.post<Izvestaj>(`${environment.api_url}/izvestaj`, JSON.stringify(hotel), this.httpOptions)
  }
  update(id:any, hotel): Observable<Izvestaj> {
    return this.httpClient.put<Izvestaj>(`${environment.api_url}/izvestaj/id`, JSON.stringify(hotel), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Izvestaj>(`${environment.api_url}/izvestaj/${id}`, this.httpOptions)
  }
}
