import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGarantiasComponent } from './vista-garantias.component';

describe('VistaGarantiasComponent', () => {
  let component: VistaGarantiasComponent;
  let fixture: ComponentFixture<VistaGarantiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaGarantiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaGarantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
