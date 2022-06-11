import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Ucesnik } from '../ucesnik/ucesnik';
import { Roditelj } from './roditelj';

@Injectable({
  providedIn: 'root'
})
export class RoditeljService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<Roditelj[]> {
    return this.httpClient.post<Roditelj[]>(`${environment.api_url}/datatable/roditelj`,dtParams)
  }
  datatable_administrator(dtParams:any): Observable<Roditelj[]> {
    return this.httpClient.post<Roditelj[]>(`${environment.api_url}/datatable/roditelj`,dtParams)
  }
  datatable_trener(dtParams:any): Observable<Roditelj[]> {
    return this.httpClient.post<Roditelj[]>(`${environment.api_url}/datatable/trener`,dtParams)
  }
  all(): Observable<Roditelj[]> {
    return this.httpClient.get<Roditelj[]>(`${environment.api_url}/roditelj`);
  }
  find(id:any): Observable<Roditelj> {
    return this.httpClient.get<Roditelj>(`${environment.api_url}/roditelj/${id}`)
  }
  store(korisnik): Observable<Roditelj> {
    return this.httpClient.post<Roditelj>(`${environment.api_url}/roditelj`, JSON.stringify(korisnik), this.httpOptions)
  }
  update(id:any, korisnik): Observable<Roditelj> {
    return this.httpClient.put<Roditelj>(`${environment.api_url}/roditelj/id`, JSON.stringify(korisnik), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<Roditelj>(`${environment.api_url}/roditelj/${id}`, this.httpOptions)
  }
  ucesnici(id:any){
    return this.httpClient.get<Ucesnik[]>(`${environment.api_url}/roditelj/${id}/ucesnici`);
  }
}
