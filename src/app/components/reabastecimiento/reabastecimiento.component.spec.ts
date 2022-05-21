import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReabastecimientoComponent } from './reabastecimiento.component';

describe('ReabastecimientoComponent', () => {
  let component: ReabastecimientoComponent;
  let fixture: ComponentFixture<ReabastecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReabastecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReabastecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
