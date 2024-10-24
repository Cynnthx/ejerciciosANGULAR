import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio7Component } from './ejercicio7.component';

describe('Ejercicio7Component', () => {
  let component: Ejercicio7Component;
  let fixture: ComponentFixture<Ejercicio7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
