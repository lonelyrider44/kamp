import { TestBed } from '@angular/core/testing';

import { KampService } from './kamp.service';

describe('KampService', () => {
  let service: KampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
