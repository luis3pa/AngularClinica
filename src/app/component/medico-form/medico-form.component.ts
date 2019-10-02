import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../../service/medico.service';
import { Medico } from '../../model/medico';
import { Especialidad } from 'src/app/model/especialidad';
import { EspecialidadService } from 'src/app/service/especialidad.service';
import { Consultorio } from 'src/app/model/consultorio';
import { ConsultorioService } from 'src/app/service/consultorio.service';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html',
  styleUrls: ['./medico-form.component.css']
})
export class MedicoFormComponent implements OnInit {
  medico: Medico;
  especialidades: Especialidad[];
  consultorios: Consultorio[];

  constructor(private route: ActivatedRoute, private router: Router, private medicoService: MedicoService, private especialidadService: EspecialidadService, private consultorioService: ConsultorioService) {
    this.medico = new Medico();
  }

  edit() {
    let codTarPro = localStorage.getItem("codTarPro");
    if (codTarPro != 'null') {
      this.medicoService.getMedicoId(codTarPro).
        subscribe(data => {
        this.medico = data;
        });
    }

  }

  onSubmit() {
    let codTarPro = localStorage.getItem("codTarPro");
    if (codTarPro != 'null') {
      this.medicoService.update(this.medico).subscribe(result => this.gotoMedicoList());
    }else{
      this.medicoService.save(this.medico).subscribe(result => this.gotoMedicoList());
    }
    
  }

  gotoMedicoList() {
    this.router.navigate(['/medicos']);
  }

  ngOnInit() {
    this.edit();
    this.especialidadService.findAll().subscribe(data => {
      this.especialidades = data;
    });
    this.consultorioService.findAll().subscribe(data => {
      this.consultorios = data;
    });
  }


}
