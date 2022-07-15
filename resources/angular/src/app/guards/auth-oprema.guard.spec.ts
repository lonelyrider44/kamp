import { TestBed } from '@angular/core/testing';

import { AuthOpremaGuard } from './auth-oprema.guard';

describe('AuthOpremaGuard', () => {
  let guard: AuthOpremaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthOpremaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
