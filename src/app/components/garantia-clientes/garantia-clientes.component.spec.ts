import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiaClientesComponent } from './garantia-clientes.component';

describe('GarantiaClientesComponent', () => {
  let component: GarantiaClientesComponent;
  let fixture: ComponentFixture<GarantiaClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarantiaClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantiaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
