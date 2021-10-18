import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistProveedorComponent } from './regist-proveedor.component';

describe('RegistProveedorComponent', () => {
  let component: RegistProveedorComponent;
  let fixture: ComponentFixture<RegistProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
