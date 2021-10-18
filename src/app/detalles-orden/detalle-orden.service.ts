import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseOrders } from './purchaseOrders';
@Injectable({
  providedIn: 'root'
})
export class DetalleOrdenService {

  link = 'http://localhost:3000/purchaseOrders';
  constructor(private http: HttpClient) {
    console.log("este es el servicio");
  }

  getProduct() {
    let heades = new HttpHeaders().set('Type-content', 'aplication/json');

    return this.http.get(this.link, { headers: heades });
  }
  getProductId(id: number) {
    let heades = new HttpHeaders().set('Type-content', 'aplication/json');

    return this.http.get('http://localhost:3000/purchaseOrders/?id=1', { headers: heades });
  }
  postProduct(detalles: PurchaseOrders): Observable<any> {

    return this.http.post(this.link, detalles);
  }
}

