import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiaokComponent } from './garantiaok.component';

describe('GarantiaokComponent', () => {
  let component: GarantiaokComponent;
  let fixture: ComponentFixture<GarantiaokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarantiaokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantiaokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
