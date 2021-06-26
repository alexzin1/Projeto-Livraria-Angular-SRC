import { TestBed } from '@angular/core/testing';

import { PagGuardService } from './pag-guard.service';

describe('PagGuardService', () => {
  let service: PagGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
