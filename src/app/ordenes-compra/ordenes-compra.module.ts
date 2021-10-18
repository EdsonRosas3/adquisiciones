import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearOrdenCompraComponent } from './crear-orden-compra/crear-orden-compra.component';
import { EditPurchaseOrderComponent } from './edit-purchase-order/edit-purchase-order.component';
import { ListPurchaseOrdenNoEndComponent } from './list-purchase-orden-no-end/list-purchase-orden-no-end.component';
import { ListPurchaseOrderEndComponent } from './list-purchase-order-end/list-purchase-order-end.component';
import { OrdenesRoutingModule } from './ordenes-compra-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrearOrdenCompraComponent,
    EditPurchaseOrderComponent,
    ListPurchaseOrdenNoEndComponent,
    ListPurchaseOrderEndComponent
  ],
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrdenesCompraModule { }
