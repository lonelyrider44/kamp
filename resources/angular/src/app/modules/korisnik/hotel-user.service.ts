import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/service';
import { HotelUser } from './hotel-user';

@Injectable({
  providedIn: 'root'
})
export class HotelUserService extends BaseService<HotelUser>{

  constructor(httpClient: HttpClient) {
    super(httpClient)
    this.url_model = "hotel-user";
  }
}
