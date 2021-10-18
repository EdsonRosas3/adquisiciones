import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromotionService } from '../../promotion.service';
import { Promotion } from '../../types/promotions';

const options = [
  {
    key: 'EXPIRED',
    value: 'Expirados',
  },
  {
    key: 'ACTIVE',
    value: 'Activos',
  },
  {
    key: 'NEXT_TO_EXPIRE',
    value: 'Proximos a expirar',
  },
];

type Action = {
  key: string;
  value: string;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public promotions!: Promotion[];
  public options!: Action[];
  constructor(
    private route: Router,
    private promotionsService: PromotionService
  ) {}

  ngOnInit(): void {
    this.options = options;
    this.promotionsService
      .getPromotions()
      .subscribe((res: Promotion[]) => (this.promotions = res));
  }

  redirectToCreatePromotion() {
    this.route.navigate(['/promotion/create-promotion']);
  }
  handlerSelect(evt: any) {
    let itemSelected = evt.target.value;

    options.forEach((opt: Action) => {
      if (
        opt.key === itemSelected.trim() &&
        itemSelected !== 'NEXT_TO_EXPIRE'
      ) {
        this.promotionsService
          .findAllByState(opt.key)
          .subscribe((res) => (this.promotions = res));
      } else if (
        opt.key === itemSelected.trim() &&
        itemSelected === 'NEXT_TO_EXPIRE'
      ) {
        this.promotionsService.findPromotionsNextToExpire();
      }
    });
  }
}
