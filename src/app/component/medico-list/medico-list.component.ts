import { Component, OnInit } from '@angular/core';
import { Medico } from '../../model/medico';
import { MedicoService } from '../../service/medico.service';
import { Router } from '@angular/router';
import { Especialidad } from 'src/app/model/especialidad';
import { Consultorio } from 'src/app/model/consultorio';
import { EspecialidadService } from 'src/app/service/especialidad.service';
import { ConsultorioService } from 'src/app/service/consultorio.service';

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.css']
})
export class MedicoListComponent implements OnInit {
  medicos: Medico[];
  especialidades: Especialidad[];
  consultorios: Consultorio[];
  estado: number=0;


  constructor(private medicoService: MedicoService, private router : Router, private especialidadService: EspecialidadService,private consultorioService: ConsultorioService) { }

  ngOnInit() {
    this.medicoService.findAll().subscribe(data =>{
      this.medicos = data;
    });

    this.especialidadService.findAll().subscribe(data =>{
      this.especialidades = data;
    });
    this.consultorioService.findAll().subscribe(data =>{
      this.consultorios = data;
    });
  }

  edit(medico :Medico):void{  
    localStorage.setItem("codTarPro",medico.codTarPro.toString());
    this.router.navigate(["addmedico"])
  }

  listacita(medico :Medico):void{  
    localStorage.setItem("codTarPro",medico.codTarPro.toString());
    this.router.navigate(["citasmedico"])
  }

  delete(medico :Medico){
    this.medicoService.getcomprobar(medico.codTarPro).subscribe(data =>{
      if(data>0){
        console.log("medico no puede ser borrado por citas vigentes");
      }else{
        this.medicoService.delete(medico).subscribe(data =>{
          this.medicos=this.medicos.filter(p=>p!==medico);
        });
      }

    });
      
  }
 
  buscarEspecialidad(idEspecialidad :Int16Array): string{
    if(this.especialidades!=null){
      let result =this.especialidades.find(data => data.idEspecialidad === idEspecialidad);
      return result.nombreEspecialidad;
    }
    
    return "";
  }

  buscarConsultorio(idConsultorio:Int16Array): string{
    if(this.consultorios!=null){
      let result =this.consultorios.find(data => data.idConsultorio === idConsultorio);
      return result.nombreConsultorio;
    }    
    return "";
  }

  buscarAtiende(idAtiende): string{
    if(idAtiende==1){  
      return "Si";
    }else{
      return "No";
    }    
    
  }

}
