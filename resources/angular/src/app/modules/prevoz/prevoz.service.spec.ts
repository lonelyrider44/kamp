import { TestBed } from '@angular/core/testing';

import { PrevozService } from './prevoz.service';

describe('PrevozService', () => {
  let service: PrevozService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevozService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
