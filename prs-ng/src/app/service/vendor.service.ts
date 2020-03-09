import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { Vendor } from '../model/vendor.class';

const url:string = "http://localhost:8080/vendors/"

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  constructor(private http:HttpClient) { }

  list():Observable<JsonResponse>{
    return this.http.get(`${url}`) as Observable<JsonResponse>;
  }

  getVendor(id: number):Observable<JsonResponse>{
    return this.http.get(`${url}${id}`) as Observable<JsonResponse>;
  }

  create(vendor: Vendor):Observable<JsonResponse>{
    return this.http.post(url,vendor) as Observable<JsonResponse>;
  }

  edit(vendor: Vendor):Observable<JsonResponse>{
    return this.http.put(url,vendor) as Observable<JsonResponse>;
  }

  delete(id:number):Observable<JsonResponse>{
    return this.http.delete(`${url}${id}`) as Observable<JsonResponse>;
  }
}