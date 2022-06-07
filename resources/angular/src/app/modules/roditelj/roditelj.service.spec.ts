import { TestBed } from '@angular/core/testing';

import { RoditeljService } from './roditelj.service';

describe('RoditeljService', () => {
  let service: RoditeljService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoditeljService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
