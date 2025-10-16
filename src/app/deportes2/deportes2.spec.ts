import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deportes2 } from './deportes2';

describe('Deportes2', () => {
  let component: Deportes2;
  let fixture: ComponentFixture<Deportes2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deportes2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deportes2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
