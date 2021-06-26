import { TestBed } from '@angular/core/testing';

import { AutenticaGuardService } from './autentica-guard.service';

describe('AutenticaGuardService', () => {
  let service: AutenticaGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticaGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
