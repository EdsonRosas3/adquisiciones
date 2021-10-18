import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import { CrearOrdenCompraComponent } from './ordenes-compra/crear-orden-compra/crear-orden-compra.component';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { OrdenesCompraModule } from './ordenes-compra/ordenes-compra.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OptionNavbarComponent } from './components/option-navbar/option-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OptionNavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ProveedoresModule,
    OrdenesCompraModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
