import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orden } from '../models/Orden';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getOrders(){
    return this.http.get('http://localhost:3000/orders')
  }
  public getOrder(id:number):Observable<any>{
    return this.http.get('http://localhost:3000/orders/'+id)
  }

  public createOrder(purchaseOrder:Orden):Observable<any>{
    return this.http.post('http://localhost:3000/orders',purchaseOrder)
  }

  public finalizeOrder(purchaseOrder:Orden):Observable<any>{
    //purchaseOrder.state = "FIN";
    return this.http.put('http://localhost:3000/orders',purchaseOrder)
  }

  public editOrder(purchaseOrder:Orden, id:number):Observable<any>{
    return this.http.put('http://localhost:3000/orders/'+id,purchaseOrder)
  }

}
