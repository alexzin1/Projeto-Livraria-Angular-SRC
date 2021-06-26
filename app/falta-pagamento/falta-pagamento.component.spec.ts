import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaltaPagamentoComponent } from './falta-pagamento.component';

describe('FaltaPagamentoComponent', () => {
  let component: FaltaPagamentoComponent;
  let fixture: ComponentFixture<FaltaPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaltaPagamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaltaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
