import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { PublicModule } from './core/public/public.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProveedoresModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
