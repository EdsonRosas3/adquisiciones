import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CrearOrdenCompraComponent } from './ordenes-compra/crear-orden-compra/crear-orden-compra.component';
import { ListPurchaseOrdenNoEndComponent } from './ordenes-compra/list-purchase-orden-no-end/list-purchase-orden-no-end.component';
import { ListPurchaseOrderEndComponent } from './ordenes-compra/list-purchase-order-end/list-purchase-order-end.component';
import { EditPurchaseOrderComponent } from './ordenes-compra/edit-purchase-order/edit-purchase-order.component';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { PublicModule } from './core/public/public.module';

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
    HttpClientModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
