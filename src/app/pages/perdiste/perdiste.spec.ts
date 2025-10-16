import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perdiste } from './perdiste';

describe('Perdiste', () => {
  let component: Perdiste;
  let fixture: ComponentFixture<Perdiste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perdiste]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Perdiste);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
