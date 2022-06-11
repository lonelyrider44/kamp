import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Uplata } from './uplata';

@Injectable({
  providedIn: 'root'
})
export class UplataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Uplata[]> {
    return this.httpClient.post<Uplata[]>(`${environment.api_url}/datatable/uplata`,dtParams)
  }
  all(): Observable<Uplata[]> {
    return this.httpClient.get<Uplata[]>(`${environment.api_url}/uplata`);
  }
  find(id:any): Observable<Uplata> {
    return this.httpClient.get<Uplata>(`${environment.api_url}/uplata/${id}`)
  }
  store(uplata): Observable<Uplata> {
    return this.httpClient.post<Uplata>(`${environment.api_url}/uplata`, JSON.stringify(uplata), this.httpOptions)
  }
  update(id:any, uplata): Observable<Uplata> {
    return this.httpClient.put<Uplata>(`${environment.api_url}/uplata/${id}`, JSON.stringify(uplata), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Uplata>(`${environment.api_url}/uplata/${id}`, this.httpOptions)
  }
}
