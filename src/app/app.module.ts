import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrearOrdenCompraComponent } from './ordenes-compra/crear-orden-compra/crear-orden-compra.component';
import { ListPurchaseOrdenNoEndComponent } from './ordenes-compra/list-purchase-orden-no-end/list-purchase-orden-no-end.component';
import { ListPurchaseOrderEndComponent } from './ordenes-compra/list-purchase-order-end/list-purchase-order-end.component';
import { EditPurchaseOrderComponent } from './ordenes-compra/edit-purchase-order/edit-purchase-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearOrdenCompraComponent,
    EditPurchaseOrderComponent,
    ListPurchaseOrdenNoEndComponent,
    ListPurchaseOrderEndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
