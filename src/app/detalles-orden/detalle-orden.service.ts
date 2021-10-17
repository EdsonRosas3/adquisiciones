import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleOrdenCompra } from './detalle-orden-compra';
@Injectable({
  providedIn: 'root'
})
export class DetalleOrdenService {

  link = 'http://localhost:3000/detalles';
  constructor(private http: HttpClient) {
    console.log("este es el servicio");
  }

  getProduct() {
    let heades = new HttpHeaders().set('Type-content', 'aplication/json');

    return this.http.get(this.link , { headers: heades });
  }

  postProduct(detalles: DetalleOrdenCompra): Observable<any> {

    return this.http.post(this.link, detalles);
  }
}

