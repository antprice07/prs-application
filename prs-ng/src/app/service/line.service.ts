import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { LineItem } from '../model/line-item.class';

const url:string = "http://localhost:8080/line-items/"

@Injectable({
  providedIn: 'root'
})
export class LineService {

  constructor(private http: HttpClient) { }
  
  listLinesByRequest(id:number):Observable<JsonResponse>{
    return this.http.get(`${url}lines-for-pr/${id}`) as Observable<JsonResponse>;
  }

  getLineItem(id:number):Observable<JsonResponse>{
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  create(lineItem: LineItem):Observable<JsonResponse>{
    return this.http.post(url,lineItem) as Observable<JsonResponse>;
  }

  edit(lineItem: LineItem):Observable<JsonResponse>{
    return this.http.put(`${url}`,lineItem) as Observable<JsonResponse>;
  }

  delete(id:number):Observable<JsonResponse>{
    return this.http.delete(`${url}/${id}`) as Observable<JsonResponse>;
  }

  deleteAllLinesForRequest(id:number):Observable<JsonResponse> {
    return this.http.delete(`${url}delete-all/${id}`) as Observable<JsonResponse>;
  }

}
