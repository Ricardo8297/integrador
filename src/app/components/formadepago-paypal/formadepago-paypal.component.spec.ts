import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormadepagoPaypalComponent } from './formadepago-paypal.component';

describe('FormadepagoPaypalComponent', () => {
  let component: FormadepagoPaypalComponent;
  let fixture: ComponentFixture<FormadepagoPaypalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormadepagoPaypalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormadepagoPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
