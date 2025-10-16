import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preguntas2 } from './preguntas2';

describe('Preguntas2', () => {
  let component: Preguntas2;
  let fixture: ComponentFixture<Preguntas2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Preguntas2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Preguntas2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
