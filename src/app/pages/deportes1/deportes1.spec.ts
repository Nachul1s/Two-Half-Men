import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deportes1 } from './deportes1';

describe('Deportes1', () => {
  let component: Deportes1;
  let fixture: ComponentFixture<Deportes1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deportes1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deportes1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
