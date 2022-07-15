import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/service';
import { Lekar } from './lekar';

@Injectable({
  providedIn: 'root'
})
export class LekarService extends BaseService<Lekar>{
  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "lekar";
  }
  
}
