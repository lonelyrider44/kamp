import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Ucesnik } from './ucesnik';

@Injectable({
  providedIn: 'root'
})
export class UcesnikService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Ucesnik[]> {
    return this.httpClient.post<Ucesnik[]>(`${environment.api_url}/datatable/ucesnik`,dtParams)
  }
  all(): Observable<Ucesnik[]> {
    return this.httpClient.get<Ucesnik[]>(`${environment.api_url}/ucesnik`);
  }
  find(id:any): Observable<Ucesnik> {
    return this.httpClient.get<Ucesnik>(`${environment.api_url}/ucesnik/${id}`)
  }
  store(ucesnik): Observable<Ucesnik> {
    return this.httpClient.post<Ucesnik>(`${environment.api_url}/ucesnik`, JSON.stringify(ucesnik), this.httpOptions)
  }
  update(id:any, ucesnik): Observable<Ucesnik> {
    return this.httpClient.put<Ucesnik>(`${environment.api_url}/ucesnik/id`, JSON.stringify(ucesnik), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Ucesnik>(`${environment.api_url}/ucesnik/${id}`, this.httpOptions)
  }
}
