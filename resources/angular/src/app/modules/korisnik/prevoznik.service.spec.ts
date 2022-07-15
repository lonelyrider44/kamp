import { TestBed } from '@angular/core/testing';

import { PrevoznikService } from './prevoznik.service';

describe('PrevoznikService', () => {
  let service: PrevoznikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevoznikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
