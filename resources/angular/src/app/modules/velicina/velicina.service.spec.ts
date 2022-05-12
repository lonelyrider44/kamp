import { TestBed } from '@angular/core/testing';

import { VelicinaService } from './velicina.service';

describe('VelicinaService', () => {
  let service: VelicinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VelicinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
