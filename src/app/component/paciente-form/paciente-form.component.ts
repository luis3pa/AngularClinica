import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../service/paciente.service';
import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {
  paciente : Paciente;

  constructor(private route: ActivatedRoute, private router: Router, private pacienteService: PacienteService) { 
    this.paciente= new Paciente();
  }

  edit(){
    let idPacienteEnviado = localStorage.getItem("idPaciente");
    if(idPacienteEnviado!='null'){
      this.pacienteService.getPacienteId(idPacienteEnviado).
      subscribe(data => {this.paciente=data;
      });
    }   
  }

  onSubmit() {
    let idPacienteEnviado = localStorage.getItem("idPaciente");
    if(idPacienteEnviado!='null'){
      this.pacienteService.update(this.paciente).subscribe(result => this.gotoPacienteList());
    }else{
      this.pacienteService.save(this.paciente).subscribe(result => this.gotoPacienteList());
    }
    
  }

  gotoPacienteList() {
    this.router.navigate(['/pacientes']);
  }

  ngOnInit() {
    this.edit();
  }
}
