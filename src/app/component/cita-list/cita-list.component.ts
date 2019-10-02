import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/model/cita';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/service/cita.service';
import { Medico } from 'src/app/model/medico';

@Component({
  selector: 'app-cita-list',
  templateUrl: './cita-list.component.html',
  styleUrls: ['./cita-list.component.css']
})
export class CitaListComponent implements OnInit {
  citasMedico: Cita[];
  citasPaciente: Cita[];
  constructor(private router : Router, private citaService : CitaService) { }

  ngOnInit() {
    this.cargar();
  }

  cargar(){
    let idMedico = localStorage.getItem("idMedico");

    if(idMedico!=null){
      this.citaService.findAllMedico(idMedico).subscribe(data =>{
        this.citasMedico = data;    
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
