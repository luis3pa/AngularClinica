import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-option',
  templateUrl: './paciente-option.component.html',
  styleUrls: ['./paciente-option.component.css']
})
export class PacienteOptionComponent implements OnInit {
  title = 'Paciente';
  constructor() { }

  ngOnInit() {
    localStorage.setItem("idPaciente",null);
  }

}
