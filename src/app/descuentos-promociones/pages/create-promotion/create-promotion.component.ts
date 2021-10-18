import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PromotionService } from '../../promotion.service';
import { FormPromotion, Items } from '../../types/promotions';

@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.scss'],
})
export class CreatePromotionComponent implements OnInit {
  promotion!: FormGroup;
  items!: Items[];
  typePromotion = ['DESCUENTO'];
  showFieldsOfDescount!: boolean;
  currentDate!: string;

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private promotionService: PromotionService
  ) {}

  ngOnInit(): void {
    this.items = [];
    this.showFieldsOfDescount = false;
    this.currentDate = this.changeFormatForAttDate(new Date());
    this.promotion = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      expirationDate: ['', Validators.required],
      productId: ['', Validators.required],
      amountOfDescount: [''],
    });
  }
  changeFormatForAttDate(currentDate: Date): string {
    return currentDate.toLocaleDateString().split('/').reverse().join('-');
  }

  select(event: any) {
    if (event.target.value === 'DESCUENTO') {
      this.showFieldsOfDescount = true;
      this.promotionService
        .getItems()
        .subscribe((items) => (this.items = items));
    } else {
      this.showFieldsOfDescount = false;
    }
  }

  sendData() {
    let promotion = { ...this.promotion.value, status: 'ACTIVE' };
    this.promotionService.create(promotion).subscribe((res) => this.comeBack());
  }

  comeBack() {
    this.route.navigate(['/promotion/promotions']);
  }
}
