import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../model/paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private pacientesUrl: string;
  private pacientesUrlSave : string;  /*='/paciente/addpaciente';*/
  private pacienteUrlUpdate : string;
  private pacienteUrlDelete : string;
  private pacienteGetId : string;
  constructor(private http: HttpClient) {
    this.pacientesUrl = 'http://localhost:8034/paciente/all';
    this.pacientesUrlSave = 'http://localhost:8034/paciente/addpaciente';
    this.pacienteUrlUpdate = 'http://localhost:8034/paciente/updatepaciente';
    this.pacienteGetId = 'http://localhost:8034/paciente/';
    this.pacienteUrlDelete = 'http://localhost:8034/paciente/delete/';
    //this.pacientesUrl = '/paciente/all';
  }
 
  public findAll(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.pacientesUrl);
  }
 
  public save(paciente: Paciente) {
    return this.http.post<Paciente>(this.pacientesUrlSave, paciente);
  }

  getPacienteId (idPaciente:string ){
    return this.http.get<Paciente>(this.pacienteGetId+idPaciente);
  }

  public update(paciente: Paciente) {
    return this.http.put<Paciente>(this.pacienteUrlUpdate, paciente);
  }

  public delete(paciente: Paciente) {
    console.log(this.pacienteUrlDelete+ paciente.idPaciente);  
    return this.http.delete<void>(this.pacienteUrlDelete+paciente.idPaciente);
  }

}
