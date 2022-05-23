import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { DodatniPaket } from './dodatni-paket';

@Injectable({
  providedIn: 'root'
})
export class DodatniPaketService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  datatable(dtParams:any): Observable<DodatniPaket[]> {
    return this.httpClient.post<DodatniPaket[]>(`${environment.api_url}/datatable/dodatni-paket`,dtParams)
  }
  all(): Observable<DodatniPaket[]> {
    return this.httpClient.get<DodatniPaket[]>(`${environment.api_url}/dodatni-paket`);
  }
  find(id:any): Observable<DodatniPaket> {
    return this.httpClient.get<DodatniPaket>(`${environment.api_url}/dodatni-paket/${id}`)
  }
  store(dodatni_paket): Observable<DodatniPaket> {
    return this.httpClient.post<DodatniPaket>(`${environment.api_url}/dodatni-paket`, JSON.stringify(dodatni_paket), this.httpOptions)
  }
  update(id:any, dodatni_paket): Observable<DodatniPaket> {
    return this.httpClient.put<DodatniPaket>(`${environment.api_url}/dodatni-paket/${id}`, JSON.stringify(dodatni_paket), this.httpOptions)
  }
  delete(id:any){
    return this.httpClient.delete<DodatniPaket>(`${environment.api_url}/dodatni-paket/${id}`, this.httpOptions)
  }
}
