import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessarLivroComponent } from './acessar-livro.component';

describe('AcessarLivroComponent', () => {
  let component: AcessarLivroComponent;
  let fixture: ComponentFixture<AcessarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessarLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
