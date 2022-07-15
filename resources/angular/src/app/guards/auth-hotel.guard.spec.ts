import { TestBed } from '@angular/core/testing';

import { AuthHotelGuard } from './auth-hotel.guard';

describe('AuthHotelGuard', () => {
  let guard: AuthHotelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthHotelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
