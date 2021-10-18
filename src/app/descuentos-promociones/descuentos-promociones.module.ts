import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { PromotionRoutingModule } from './descuentos-promociones-routing.module';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './modal.service';
import { CreatePromotionComponent } from './pages/create-promotion/create-promotion.component';
import { PromotionService } from './promotion.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, ModalComponent, CreatePromotionComponent],
  providers: [ModalService, PromotionService],
  imports: [
    CommonModule,
    PromotionRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class DescuentosPromocionesModule {}
