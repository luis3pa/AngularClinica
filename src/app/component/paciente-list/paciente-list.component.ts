import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../model/paciente';
import { PacienteService } from '../../service/paciente.service';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/service/cita.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  pacientes: Paciente[];

  constructor(private pacienteService: PacienteService, private router : Router, private citaService : CitaService) { }

  ngOnInit() {
    this.pacienteService.findAll().subscribe(data =>{
      this.pacientes = data;
    });
  }

  edit(paciente :Paciente):void{
    
    localStorage.setItem("idPaciente",paciente.idPaciente.toString());
    this.router.navigate(["addpaciente"])
  }

  delete(paciente :Paciente){
   // this.citaService.deleteCitaPaciente(paciente.id_paciente);
    this.pacienteService.delete(paciente).subscribe(data =>{
      this.pacientes=this.pacientes.filter(p=>p!==paciente);
    });
  }

  listacita(paciente :Paciente){
    localStorage.setItem("idPaciente",paciente.idPaciente.toString());
    this.router.navigate(["citaoption"])
  }

  buscarTratamiento(idPaciente): string{
    if(idPaciente==1){  
      return "Si";
    }else{
      return "No";
    }    
    
  }

}
