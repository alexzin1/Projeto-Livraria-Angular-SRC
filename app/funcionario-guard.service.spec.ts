import { TestBed } from '@angular/core/testing';

import { FuncionarioGuardService } from './funcionario-guard.service';

describe('FuncionarioGuardService', () => {
  let service: FuncionarioGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
