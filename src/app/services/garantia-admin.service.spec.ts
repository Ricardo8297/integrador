import { TestBed } from '@angular/core/testing';

import { GarantiaAdminService } from './garantia-admin.service';

describe('GarantiaAdminService', () => {
  let service: GarantiaAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarantiaAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
