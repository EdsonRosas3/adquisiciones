import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistProductoComponent } from './regist-producto.component';

describe('RegistProductoComponent', () => {
  let component: RegistProductoComponent;
  let fixture: ComponentFixture<RegistProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
