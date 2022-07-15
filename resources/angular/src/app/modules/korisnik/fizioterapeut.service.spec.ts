import { TestBed } from '@angular/core/testing';

import { FizioterapeutService } from './fizioterapeut.service';

describe('FizioterapeutService', () => {
  let service: FizioterapeutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizioterapeutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
