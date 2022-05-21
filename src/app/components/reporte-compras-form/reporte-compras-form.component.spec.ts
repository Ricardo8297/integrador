import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteComprasFormComponent } from './reporte-compras-form.component';

describe('ReporteComprasFormComponent', () => {
  let component: ReporteComprasFormComponent;
  let fixture: ComponentFixture<ReporteComprasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteComprasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteComprasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
