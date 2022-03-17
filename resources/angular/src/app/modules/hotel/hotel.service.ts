import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Hotel } from './hotel';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
constructor(private httpClient: HttpClient) { }

datatable(dtParams:any): Observable<Hotel[]> {
  return this.httpClient.post<Hotel[]>(`${environment.api_url}/datatable/hotel`,dtParams)
}
all(): Observable<Hotel[]> {
  return this.httpClient.get<Hotel[]>(`${environment.api_url}/hotel`);
}
find(id:any): Observable<Hotel> {
  return this.httpClient.get<Hotel>(`${environment.api_url}/hotel/${id}`)
}
store(hotel): Observable<Hotel> {
  return this.httpClient.post<Hotel>(`${environment.api_url}/hotel`, JSON.stringify(hotel), this.httpOptions)
}
update(id:any, hotel): Observable<Hotel> {
  return this.httpClient.put<Hotel>(`${environment.api_url}/hotel/id`, JSON.stringify(hotel), this.httpOptions)
}
delete(id:any){
  return this.httpClient.delete<Hotel>(`${environment.api_url}/hotel/${id}`, this.httpOptions)
}

errorHandler(error) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     // Get client-side error
     errorMessage = error.error.message;
   } else {
     // Get server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   console.log(errorMessage);
   return throwError(errorMessage);
}
}
