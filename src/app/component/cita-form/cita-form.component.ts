import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from 'src/app/model/cita';
import { CitaService } from 'src/app/service/cita.service';
import { Medico } from 'src/app/model/medico';
import { MedicoService } from 'src/app/service/medico.service';

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.css']
})
export class CitaFormComponent implements OnInit {
  cita :Cita;
  medicos: Medico[];
  medicoString : string;
  constructor(private route: ActivatedRoute, private router: Router, private citaService: CitaService, private medicoService: MedicoService) { 
    this.cita= new Cita();
  }

  onSubmit() {
    let idPaciente = localStorage.getItem("idPaciente");
    this.citaService.save(this.cita,this.medicoString.replace(/ /g,""), idPaciente).subscribe(result => this.gotoMedicoList());
  }

  gotoMedicoList() {
    this.router.navigate(['/citaspaciente']);
  }
  ngOnInit() {
    this.medicoService.findAll().subscribe(data =>{
      this.medicos = data;
    });
  }

}
