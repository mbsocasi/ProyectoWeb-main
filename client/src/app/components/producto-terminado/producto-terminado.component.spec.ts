import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoTerminadoComponent } from './producto-terminado.component';

describe('ProductoTerminadoComponent', () => {
  let component: ProductoTerminadoComponent;
  let fixture: ComponentFixture<ProductoTerminadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoTerminadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoTerminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
