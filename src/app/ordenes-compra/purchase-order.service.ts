import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  public createOrder(purchaseOrder: {id:number, state:string, receivedType:string, paymentStatus:string, totalAmount:number, balanceAmount:number, amountProduct:number, products:any, provider:any }){
    return this.http.post('http://localhost:3000/orders',purchaseOrder)
  }

  public finalizeOrder(purchaseOrder: {id:number, state:string, receivedType:string, paymentStatus:string, totalAmount:number, balanceAmount:number, amountProduct:number, products:any, provider:any }){
    //purchaseOrder.state = "FIN";
    return this.http.put('http://localhost:3000/orders',purchaseOrder)
  }

  public editOrder(purchaseOrder: {id:number, state:string, receivedType:string, paymentStatus:string, totalAmount:number, balanceAmount:number, amountProduct:number, products:any, provider:any }){
    return this.http.put('http://localhost:3000/orders',purchaseOrder)
  }

}
