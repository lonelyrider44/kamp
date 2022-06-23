import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Prijava } from './prijava';
import { PrijavaStatus } from './prijava-status';

@Injectable({
  providedIn: 'root'
})
export class PrijavaService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Prijava[]> {
    return this.httpClient.post<Prijava[]>(`${environment.api_url}/datatable/prijava`,dtParams)
  }
  all(): Observable<Prijava[]> {
    return this.httpClient.get<Prijava[]>(`${environment.api_url}/prijava`);
  }
  find(id:any): Observable<Prijava> {
    return this.httpClient.get<Prijava>(`${environment.api_url}/prijava/${id}`)
  }
  store(kamp): Observable<Prijava> {
    return this.httpClient.post<Prijava>(`${environment.api_url}/prijava`, JSON.stringify(kamp), this.httpOptions)
  }
  update(id:any, kamp): Observable<Prijava> {
    return this.httpClient.put<Prijava>(`${environment.api_url}/prijava/${id}`, JSON.stringify(kamp), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Prijava>(`${environment.api_url}/prijava/${id}`, this.httpOptions)
  }
  cimeri(id:any, broj_sobe:any){
    return this.httpClient.post<Prijava[]>(`${environment.api_url}/prijava/${id}/cimeri/${broj_sobe}`,{})
  }
  statusi(){
    return this.httpClient.post<PrijavaStatus[]>(`${environment.api_url}/prijava/statusi`,{})
  }
}
