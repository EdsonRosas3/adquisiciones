import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'ver-detalle', loadChildren: () => import('./detalles-orden/detalles-orden.module').then(m => m.DetallesOrdenModule)},
  {
    path: 'promotion',
    loadChildren: () =>
      import('./descuentos-promociones/descuentos-promociones.module').then(
        (m) => m.DescuentosPromocionesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
