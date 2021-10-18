import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from 'src/model/proveedor.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  _url = 'http://localhost:3000/providers';
  private heades = new HttpHeaders({'Type-content': 'aplication/json'})

  constructor(private http:HttpClient) { 

  }

  getProduct(id:number):Observable<any>{
    return this.http.get(this._url+"/"+id);
  }

  getProveedores():Observable<any>{
    return this.http.get(this._url)
  }

  postProveedor(provider:Proveedor):Observable<any> {
    return this.http.post(this._url, provider)
  }

  deleteProveedor(id:number):Observable<any>{
    return this.http.delete("http://localhost:3000/providers/"+id)
  }

  putProveedor(id:number, provider:Proveedor):Observable<any>{
    return this.http.put("http://localhost:3000/providers/"+id, provider)
  }
}
