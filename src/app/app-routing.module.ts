import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicoListComponent } from './component/medico-list/medico-list.component';
import { MedicoFormComponent } from './component/medico-form/medico-form.component';
import { MedicoOptionComponent } from './component/medico-option/medico-option.component';
import { PacienteListComponent } from './component/paciente-list/paciente-list.component';
import { PacienteFormComponent } from './component/paciente-form/paciente-form.component';
import { PacienteOptionComponent } from './component/paciente-option/paciente-option.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { CitaFormComponent } from './component/cita-form/cita-form.component';
import { CitaListComponent } from './component/cita-list/cita-list.component';
import { CitaOptionComponent } from './component/cita-option/cita-option.component';
import { CitaListPacienteComponent } from './component/cita-list-paciente/cita-list-paciente.component';
import { FirmaComponent } from './component/firma/firma.component';

const routes: Routes = [
  { path: 'medicos', component: MedicoListComponent },
  { path: 'addmedico', component: MedicoFormComponent },
  { path: 'medicooption', component: MedicoOptionComponent },
  { path: 'pacientes', component: PacienteListComponent },
  { path: 'addpaciente', component: PacienteFormComponent },
  { path: 'pacienteoption', component: PacienteOptionComponent },
  { path: 'citasmedico', component: CitaListComponent },
  { path: 'citaoption', component: CitaOptionComponent },
  { path: 'citaspaciente', component: CitaListPacienteComponent },
  { path: 'addcita', component: CitaFormComponent },
  { path: 'firma', component: FirmaComponent },
  { path: 'inicio', component: InicioComponent, pathMatch:'full'},
  { path: '**', redirectTo:'inicio' , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
