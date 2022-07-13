import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Trener } from '../korisnik/trener';
import { Ucesnik } from '../ucesnik/ucesnik';
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
  datatable_ucesnici(dtParams:any): Observable<Ucesnik[]> {
    return this.httpClient.post<Ucesnik[]>(`${environment.api_url}/datatable/oprema/ucesnici`,dtParams)
  }
  datatable_treneri(dtParams:any): Observable<Trener[]> {
    return this.httpClient.post<Trener[]>(`${environment.api_url}/datatable/oprema/treneri`,dtParams)
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

  statistika(kamp_id: any): any{
    return this.httpClient.post<any>(`${environment.api_url}/oprema/statistika`, {kamp_id: kamp_id}, this.httpOptions)
  }
}
