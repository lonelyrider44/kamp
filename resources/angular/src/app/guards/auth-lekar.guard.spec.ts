import { TestBed } from '@angular/core/testing';

import { AuthLekarGuard } from './auth-lekar.guard';

describe('AuthLekarGuard', () => {
  let guard: AuthLekarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthLekarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
