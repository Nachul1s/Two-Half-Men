import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotonHome } from './boton-home';

describe('BotonHome', () => {
  let component: BotonHome;
  let fixture: ComponentFixture<BotonHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
