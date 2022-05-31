import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormadepagoTarjetaComponent } from './formadepago-tarjeta.component';

describe('FormadepagoTarjetaComponent', () => {
  let component: FormadepagoTarjetaComponent;
  let fixture: ComponentFixture<FormadepagoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormadepagoTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormadepagoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
