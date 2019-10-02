import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaListPacienteComponent } from './cita-list-paciente.component';

describe('CitaListPacienteComponent', () => {
  let component: CitaListPacienteComponent;
  let fixture: ComponentFixture<CitaListPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaListPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaListPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
