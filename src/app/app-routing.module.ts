import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerDetalleComponent } from './detalles-orden/ver-detalle/ver-detalle.component';

const routes: Routes = [
  {
    path: 'ver-detalle/:id', component: VerDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
