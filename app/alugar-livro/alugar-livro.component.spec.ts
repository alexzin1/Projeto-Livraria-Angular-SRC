import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlugarLivroComponent } from './alugar-livro.component';

describe('AlugarLivroComponent', () => {
  let component: AlugarLivroComponent;
  let fixture: ComponentFixture<AlugarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlugarLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlugarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
