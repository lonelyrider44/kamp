import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Mesto } from './mesto';

@Injectable({
  providedIn: 'root'
})
export class MestoService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Mesto[]> {
    return this.httpClient.post<Mesto[]>(`${environment.api_url}/datatable/mesto`,dtParams)
  }
  all(): Observable<Mesto[]> {
    return this.httpClient.get<Mesto[]>(`${environment.api_url}/mesto`);
  }
  autocomplete(naziv:string): Observable<Mesto[]> {
    return this.httpClient.post<Mesto[]>(`${environment.api_url}/mesto/autocomplete`,{ac: naziv});
  }
  find(id:any): Observable<Mesto> {
    return this.httpClient.get<Mesto>(`${environment.api_url}/mesto/${id}`)
  }
  store(kamp): Observable<Mesto> {
    return this.httpClient.post<Mesto>(`${environment.api_url}/mesto`, JSON.stringify(kamp), this.httpOptions)
  }
  update(id:any, kamp): Observable<Mesto> {
    return this.httpClient.put<Mesto>(`${environment.api_url}/mesto/${id}`, JSON.stringify(kamp), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Mesto>(`${environment.api_url}/mesto/${id}`, this.httpOptions)
  }
}
