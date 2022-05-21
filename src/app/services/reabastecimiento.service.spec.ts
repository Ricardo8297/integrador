import { TestBed } from '@angular/core/testing';

import { ReabastecimientoService } from './reabastecimiento.service';

describe('ReabastecimientoService', () => {
  let service: ReabastecimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReabastecimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
