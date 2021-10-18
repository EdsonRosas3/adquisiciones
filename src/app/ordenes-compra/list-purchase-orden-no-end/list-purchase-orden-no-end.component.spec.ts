import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPurchaseOrdenNoEndComponent } from './list-purchase-orden-no-end.component';

describe('ListPurchaseOrdenNoEndComponent', () => {
  let component: ListPurchaseOrdenNoEndComponent;
  let fixture: ComponentFixture<ListPurchaseOrdenNoEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPurchaseOrdenNoEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPurchaseOrdenNoEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
