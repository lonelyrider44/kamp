import { TestBed } from '@angular/core/testing';

import { DodatniPaketService } from './dodatni-paket.service';

describe('DodatniPaketService', () => {
  let service: DodatniPaketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DodatniPaketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
