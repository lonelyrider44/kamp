import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Korisnik } from './korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Korisnik[]> {
    return this.httpClient.post<Korisnik[]>(`${environment.api_url}/datatable/korisnik`,dtParams)
  }
  datatable_administrator(dtParams:any): Observable<Korisnik[]> {
    return this.httpClient.post<Korisnik[]>(`${environment.api_url}/datatable/korisnik`,dtParams)
  }
  datatable_trener(dtParams:any): Observable<Korisnik[]> {
    return this.httpClient.post<Korisnik[]>(`${environment.api_url}/datatable/trener`,dtParams)
  }
  all(): Observable<Korisnik[]> {
    return this.httpClient.get<Korisnik[]>(`${environment.api_url}/korisnik`);
  }
  find(id:any): Observable<Korisnik> {
    return this.httpClient.get<Korisnik>(`${environment.api_url}/korisnik/${id}`)
  }
  store(korisnik): Observable<Korisnik> {
    return this.httpClient.post<Korisnik>(`${environment.api_url}/korisnik`, JSON.stringify(korisnik), this.httpOptions)
  }
  update(id:any, korisnik): Observable<Korisnik> {
    return this.httpClient.put<Korisnik>(`${environment.api_url}/korisnik/id`, JSON.stringify(korisnik), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Korisnik>(`${environment.api_url}/korisnik/${id}`, this.httpOptions)
  }
}
