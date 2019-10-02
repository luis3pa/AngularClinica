import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cita-option',
  templateUrl: './cita-option.component.html',
  styleUrls: ['./cita-option.component.css']
})
export class CitaOptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let idPaciente = localStorage.getItem("idPaciente");
    localStorage.setItem("idPaciente",idPaciente);
  }

}
