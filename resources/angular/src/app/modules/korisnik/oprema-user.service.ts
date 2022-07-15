import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/service';
import { OpremaUser } from './oprema-user';

@Injectable({
  providedIn: 'root'
})
export class OpremaUserService extends BaseService<OpremaUser>{

  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "oprema-user";
  }
}
