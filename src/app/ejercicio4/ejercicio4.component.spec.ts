import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio4Component } from './ejercicio4.component';

describe('Ejercicio4Component', () => {
  let component: Ejercicio4Component;
  let fixture: ComponentFixture<Ejercicio4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
