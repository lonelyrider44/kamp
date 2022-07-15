import { TestBed } from '@angular/core/testing';

import { AuthRoditeljGuard } from './auth-roditelj.guard';

describe('AuthRoditeljGuard', () => {
  let guard: AuthRoditeljGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthRoditeljGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
