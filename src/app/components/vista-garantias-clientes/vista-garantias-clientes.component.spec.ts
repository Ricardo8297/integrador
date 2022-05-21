import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGarantiasClientesComponent } from './vista-garantias-clientes.component';

describe('VistaGarantiasClientesComponent', () => {
  let component: VistaGarantiasClientesComponent;
  let fixture: ComponentFixture<VistaGarantiasClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaGarantiasClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaGarantiasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
