import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOrdenCompraComponent } from './crear-orden-compra.component';

describe('CrearOrdenCompraComponent', () => {
  let component: CrearOrdenCompraComponent;
  let fixture: ComponentFixture<CrearOrdenCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearOrdenCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOrdenCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
