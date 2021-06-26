import { TestBed } from '@angular/core/testing';

import { RootGuardService } from './root-guard.service';

describe('RootGuardService', () => {
  let service: RootGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
