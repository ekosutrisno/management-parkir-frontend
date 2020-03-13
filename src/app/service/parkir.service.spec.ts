import { TestBed } from '@angular/core/testing';

import { ParkirService } from './parkir.service';

describe('ParkirService', () => {
  let service: ParkirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
