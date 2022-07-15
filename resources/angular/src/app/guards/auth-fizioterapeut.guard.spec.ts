import { TestBed } from '@angular/core/testing';

import { AuthFizioterapeutGuard } from './auth-fizioterapeut.guard';

describe('AuthFizioterapeutGuard', () => {
  let guard: AuthFizioterapeutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthFizioterapeutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
