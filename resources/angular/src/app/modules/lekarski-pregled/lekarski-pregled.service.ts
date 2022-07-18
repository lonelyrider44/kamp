import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/service';
import { LekarskiPregled } from './lekarski-pregled';

@Injectable({
  providedIn: 'root'
})
export class LekarskiPregledService extends BaseService<LekarskiPregled> {

  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "lekarski-pregled";
  } 
}
