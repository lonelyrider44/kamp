import { TestBed } from '@angular/core/testing';

import { LekarskiPregledService } from './lekarski-pregled.service';

describe('LekarskiPregledService', () => {
  let service: LekarskiPregledService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LekarskiPregledService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
