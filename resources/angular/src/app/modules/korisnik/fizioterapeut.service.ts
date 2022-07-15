import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/service';
import { Fizioterapeut } from './fizioterapeut';

@Injectable({
  providedIn: 'root'
})
export class FizioterapeutService extends BaseService<Fizioterapeut> {

  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "fizioterapeut";
  }
}
