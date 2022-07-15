import { TestBed } from '@angular/core/testing';

import { AuthPrevoznikGuard } from './auth-prevoznik.guard';

describe('AuthPrevoznikGuard', () => {
  let guard: AuthPrevoznikGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthPrevoznikGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
