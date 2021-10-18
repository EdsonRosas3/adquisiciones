import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistProductoComponent } from './products/regist-producto/regist-producto/regist-producto.component';
import { ListProveedoresComponent } from './proveedor/list-proveedores/list-proveedores.component';
import { RegistProveedorComponent } from './proveedor/regist-proveedor/regist-proveedor.component';
import { UpdateProveedorComponent } from './proveedor/update-proveedor/update-proveedor/update-proveedor.component';

const routes: Routes = [
    {path: 'provider', component: RegistProveedorComponent},
    {path: 'listProvider', component:ListProveedoresComponent},
    {path: 'product', component:RegistProductoComponent},
    {path: 'update/:id', component:UpdateProveedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }