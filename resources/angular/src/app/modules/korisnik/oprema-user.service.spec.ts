import { TestBed } from '@angular/core/testing';

import { OpremaUserService } from './oprema-user.service';

describe('OpremaUserService', () => {
  let service: OpremaUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpremaUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
