import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KampService {

  private apiServer =  `http://local.kamp/api`
  constructor(private httpClient: HttpClient) { 
    // this.apiServer = globals.server_url + "/api";
  }

  datatable(data: any){
    return this.httpClient.post(`${this.apiServer}/kamp/datatable`,data);
  }
}
