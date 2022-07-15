import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/service';
import { Prevoznik } from './prevoznik';

@Injectable({
  providedIn: 'root'
})
export class PrevoznikService extends BaseService<Prevoznik>{

  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "prevoznik";
  }
}
