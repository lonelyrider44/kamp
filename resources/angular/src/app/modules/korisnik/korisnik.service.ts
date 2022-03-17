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
    return this.httpClient.post<Korisnik[]>(`${environment.api_url}/datatable/hotel`,dtParams)
  }
  all(): Observable<Korisnik[]> {
    return this.httpClient.get<Korisnik[]>(`${environment.api_url}/hotel`);
  }
  find(id:any): Observable<Korisnik> {
    return this.httpClient.get<Korisnik>(`${environment.api_url}/hotel/${id}`)
  }
  store(hotel): Observable<Korisnik> {
    return this.httpClient.post<Korisnik>(`${environment.api_url}/hotel`, JSON.stringify(hotel), this.httpOptions)
  }
  update(id:any, hotel): Observable<Korisnik> {
    return this.httpClient.put<Korisnik>(`${environment.api_url}/hotel/id`, JSON.stringify(hotel), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Korisnik>(`${environment.api_url}/hotel/${id}`, this.httpOptions)
  }
}
