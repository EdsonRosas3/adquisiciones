import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/model/proveedor.model';
import { ProveedorService } from '../../service/proveedor.service';

@Component({
  selector: 'app-list-proveedores',
  templateUrl: './list-proveedores.component.html',
  styleUrls: ['./list-proveedores.component.scss']
})
export class ListProveedoresComponent implements OnInit {

  providers:Proveedor[]=[];
  id!:number
  constructor(private service:ProveedorService) { }

  ngOnInit(): void {
    this.getProviders()
  }

  getProviders(){
    this.service.getProveedores().subscribe((arg:[]) => {
      console.log(arg)
      this.providers = arg
    })
  }

  deleteProvider(id:number){
    if(confirm("Are you sure delete")){
    this.service.deleteProveedor(id).subscribe(arg =>{
    } )}
  }

  saveIdProveedor(id_proveedor:number){
    this.id = id_proveedor
    console.log(this.id)
    return this.id
  }
}
