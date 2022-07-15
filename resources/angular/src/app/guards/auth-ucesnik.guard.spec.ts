import { TestBed } from '@angular/core/testing';

import { AuthUcesnikGuard } from './auth-ucesnik.guard';

describe('AuthUcesnikGuard', () => {
  let guard: AuthUcesnikGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthUcesnikGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
