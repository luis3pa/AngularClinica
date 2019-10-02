import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/model/cita';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/service/cita.service';

@Component({
  selector: 'app-cita-list-paciente',
  templateUrl: './cita-list-paciente.component.html',
  styleUrls: ['./cita-list-paciente.component.css']
})
export class CitaListPacienteComponent implements OnInit {
  citasPaciente: Cita[];

  constructor(private router : Router, private citaService : CitaService) { }

  ngOnInit() {
    this.cargar();
  }

  cargar(){
    let idPaciente = localStorage.getItem("idPaciente");
    if(idPaciente!=null){
      this.citaService.findAllPaciente(idPaciente).subscribe(data =>{
      this.citasPaciente = data;     
      });     
    }
  }

  buscarAsistir(idAsistir): string{
    if(idAsistir==1){  
      return "Si";
    }else{
      return "No";
    }    
  }


}
