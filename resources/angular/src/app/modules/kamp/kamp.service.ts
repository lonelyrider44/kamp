import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from '../shared/service';
import { Smena } from '../smena/smena';
import { Ucesnik } from '../ucesnik/ucesnik';
import { Kamp, KampStatus } from './kamp';

@Injectable({
  providedIn: 'root'
})
export class KampService extends BaseService<Kamp>{
  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "kamp";
  }

  getAktivniKamp(): Observable<Kamp> {
    return this.httpClient.post<Kamp>(`${environment.api_url}/kamp/aktivni`, {})
  }
  aktivni(): Observable<Kamp[]> {
    return this.httpClient.post<Kamp[]>(`${environment.api_url}/kamp/aktivni2`, {})
  }
  statusi(): Observable<KampStatus[]> {
    return this.httpClient.post<KampStatus[]>(`${environment.api_url}/kamp/statusi`, {})
  }
  smene(id: any) {
    return this.httpClient.get<Smena[]>(`${environment.api_url}/kamp/${id}/smene`);
  }
  ucesnici(id: any) {
    return this.httpClient.get<Ucesnik[]>(`${environment.api_url}/kamp/${id}/ucesnici`);
  }
  dashboard_stats(id: any) {
    return this.httpClient.get<any>(`${environment.api_url}/kamp/${id}/dashboard_stats`);
  }
}
