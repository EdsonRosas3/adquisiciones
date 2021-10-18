import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistProveedorComponent } from './proveedor/regist-proveedor/regist-proveedor.component';
import { ListProveedoresComponent } from './proveedor/list-proveedores/list-proveedores.component';
import { RegistProductoComponent } from './products/regist-producto/regist-producto/regist-producto.component';
import { UpdateProveedorComponent } from './proveedor/update-proveedor/update-proveedor/update-proveedor.component';



@NgModule({
  declarations: [
    RegistProveedorComponent,
    ListProveedoresComponent,
    RegistProductoComponent,
    UpdateProveedorComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProveedoresModule { }
