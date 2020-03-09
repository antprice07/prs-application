import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { Product } from '../model/product.class';


const url:string = "http://localhost:8080/products/"

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http:HttpClient) { }

  list():Observable<JsonResponse>{
    return this.http.get(`${url}`) as Observable<JsonResponse>;
  }

  getProduct(id: number):Observable<JsonResponse>{
    return this.http.get(`${url}${id}`) as Observable<JsonResponse>;
  }

  create(product: Product):Observable<JsonResponse>{
    return this.http.post(url,product) as Observable<JsonResponse>;
  }

  edit(product: Product):Observable<JsonResponse>{
    return this.http.put(url,product) as Observable<JsonResponse>;
  }

  delete(id:number):Observable<JsonResponse>{
    return this.http.delete(`${url}${id}`) as Observable<JsonResponse>;
  }
}