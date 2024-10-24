import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio8Component } from './ejercicio8.component';

describe('Ejercicio8Component', () => {
  let component: Ejercicio8Component;
  let fixture: ComponentFixture<Ejercicio8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
