import { TestBed } from '@angular/core/testing';

import { KendaraanService } from './kendaraan.service';

describe('KendaraanService', () => {
  let service: KendaraanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KendaraanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
