import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPurchaseOrderEndComponent } from './list-purchase-order-end.component';

describe('ListPurchaseOrderEndComponent', () => {
  let component: ListPurchaseOrderEndComponent;
  let fixture: ComponentFixture<ListPurchaseOrderEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPurchaseOrderEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPurchaseOrderEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
