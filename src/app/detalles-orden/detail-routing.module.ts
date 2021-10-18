import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerDetalleComponent } from './ver-detalle/ver-detalle.component';
const routes: Routes = [
  {path: ':id', component: VerDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }

