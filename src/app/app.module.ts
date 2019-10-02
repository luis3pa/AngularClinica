import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { MedicoListComponent } from './component/medico-list/medico-list.component';
import { MedicoFormComponent } from './component/medico-form/medico-form.component';
import { MedicoService } from './service/medico.service';
import { InicioComponent } from './component/inicio/inicio.component';
import { MedicoOptionComponent } from './component/medico-option/medico-option.component';
import { PacienteFormComponent } from './component/paciente-form/paciente-form.component';
import { PacienteListComponent } from './component/paciente-list/paciente-list.component';
import { PacienteOptionComponent } from './component/paciente-option/paciente-option.component';
import { PacienteService } from './service/paciente.service';
import { CitaFormComponent } from './component/cita-form/cita-form.component';
import { CitaListComponent } from './component/cita-list/cita-list.component';
import { CitaOptionComponent } from './component/cita-option/cita-option.component';
import { CitaListPacienteComponent } from './component/cita-list-paciente/cita-list-paciente.component';
import { FirmaComponent } from './component/firma/firma.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicoListComponent,
    MedicoFormComponent,
    InicioComponent,
    MedicoOptionComponent,
    PacienteFormComponent,
    PacienteListComponent,
    PacienteOptionComponent,
    CitaFormComponent,
    CitaListComponent,
    CitaOptionComponent,
    CitaListPacienteComponent,
    FirmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    FormsModule
  ],
  providers: [MedicoService,PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
