import { TestBed } from '@angular/core/testing';

import { AuthTrenerGuard } from './auth-trener.guard';

describe('AuthTrenerGuard', () => {
  let guard: AuthTrenerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthTrenerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
