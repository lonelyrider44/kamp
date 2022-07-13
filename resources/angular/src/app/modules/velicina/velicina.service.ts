import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from '../shared/service';
import { Ucesnik } from '../ucesnik/ucesnik';
import { Velicina } from './velicina';

@Injectable({
  providedIn: 'root'
})
export class VelicinaService extends BaseService<Velicina>{

  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "velicina";
  }

  ucesnici_datatable(dtParams:any): Observable<Ucesnik[]> {
    return this.httpClient.post<Ucesnik[]>(`${environment.api_url}/datatable/${this.url_model}/ucesnici`,dtParams)
  }
}
