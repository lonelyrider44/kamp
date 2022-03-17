import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Zahtev } from './zahtev';

@Injectable({
  providedIn: 'root'
})
export class ZahtevService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Zahtev[]> {
    return this.httpClient.post<Zahtev[]>(`${environment.api_url}/datatable/zahtev`,dtParams)
  }
  all(): Observable<Zahtev[]> {
    return this.httpClient.get<Zahtev[]>(`${environment.api_url}/zahtev`);
  }
  find(id:any): Observable<Zahtev> {
    return this.httpClient.get<Zahtev>(`${environment.api_url}/zahtev/${id}`)
  }
  store(zahtev): Observable<Zahtev> {
    return this.httpClient.post<Zahtev>(`${environment.api_url}/zahtev`, JSON.stringify(zahtev), this.httpOptions)
  }
  update(id:any, zahtev): Observable<Zahtev> {
    return this.httpClient.put<Zahtev>(`${environment.api_url}/zahtev/id`, JSON.stringify(zahtev), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Zahtev>(`${environment.api_url}/zahtev/${id}`, this.httpOptions)
  }
}
