import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePromotionComponent } from './pages/create-promotion/create-promotion.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'promotions',
        component: MainComponent,
      },
      {
        path: 'create-promotion',
        component: CreatePromotionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PromotionRoutingModule {}
