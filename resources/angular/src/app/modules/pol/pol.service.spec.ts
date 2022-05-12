import { TestBed } from '@angular/core/testing';

import { PolService } from './pol.service';

describe('PolService', () => {
  let service: PolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
