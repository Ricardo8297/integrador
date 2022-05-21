import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiaAdminComponent } from './garantia-admin.component';

describe('GarantiaAdminComponent', () => {
  let component: GarantiaAdminComponent;
  let fixture: ComponentFixture<GarantiaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarantiaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantiaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
