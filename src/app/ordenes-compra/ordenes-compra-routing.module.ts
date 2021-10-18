import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearOrdenCompraComponent } from './crear-orden-compra/crear-orden-compra.component';
import { EditPurchaseOrderComponent } from './edit-purchase-order/edit-purchase-order.component';
import { ListPurchaseOrdenNoEndComponent } from './list-purchase-orden-no-end/list-purchase-orden-no-end.component';
import { ListPurchaseOrderEndComponent } from './list-purchase-order-end/list-purchase-order-end.component';

const routes: Routes = [
    {path: "order-create", component: CrearOrdenCompraComponent},
  {path: "order-edit/:id", component: EditPurchaseOrderComponent},
  {path: "orderNoEnd-list", component: ListPurchaseOrdenNoEndComponent},
  {path: "orderEnd-list", component: ListPurchaseOrderEndComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OrdenesRoutingModule { }