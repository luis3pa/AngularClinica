import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteOptionComponent } from './paciente-option.component';

describe('PacienteOptionComponent', () => {
  let component: PacienteOptionComponent;
  let fixture: ComponentFixture<PacienteOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
