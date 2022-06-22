import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

export interface IBaseService{
}
export class BaseService<T> implements IBaseService{
    protected url_model:string = "";
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      constructor(protected httpClient?: HttpClient) { }
    
      datatable(dtParams:any): Observable<T[]> {
        return this.httpClient.post<T[]>(`${environment.api_url}/datatable/${this.url_model}`,dtParams)
      }
      all(): Observable<T[]> {
        return this.httpClient.get<T[]>(`${environment.api_url}/${this.url_model}`);
      }
      find(id:any): Observable<T> {
        return this.httpClient.get<T>(`${environment.api_url}/${this.url_model}/${id}`)
      }
      store(kamp): Observable<T> {
        return this.httpClient.post<T>(`${environment.api_url}/${this.url_model}`, JSON.stringify(kamp), this.httpOptions)
      }
      update(id:any, kamp): Observable<T> {
        return this.httpClient.put<T>(`${environment.api_url}/${this.url_model}/${id}`, JSON.stringify(kamp), this.httpOptions)
      }
      delete(id:any){
        return this.httpClient.delete<T>(`${environment.api_url}/${this.url_model}/${id}`, this.httpOptions)
      }
}
