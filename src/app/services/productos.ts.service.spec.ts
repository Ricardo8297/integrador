import { TestBed } from '@angular/core/testing';

import { Productos.TsService } from './productos.ts.service';

describe('Productos.TsService', () => {
  let service: Productos.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productos.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
