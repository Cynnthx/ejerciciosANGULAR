import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio6Component } from './ejercicio6.component';

describe('Ejercicio6Component', () => {
  let component: Ejercicio6Component;
  let fixture: ComponentFixture<Ejercicio6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
