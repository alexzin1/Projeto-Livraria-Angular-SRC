import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssitirComponent } from './assitir.component';

describe('AssitirComponent', () => {
  let component: AssitirComponent;
  let fixture: ComponentFixture<AssitirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssitirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssitirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
