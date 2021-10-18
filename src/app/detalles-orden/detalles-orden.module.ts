import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerDetalleComponent } from './ver-detalle/ver-detalle.component';
import { DetailRoutingModule } from './detail-routing.module';



@NgModule({
  declarations: [
    VerDetalleComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
  ],
  exports:[
    VerDetalleComponent
   ]
})
export class DetallesOrdenModule { }
