import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from '../model/cita';
import { Medico } from '../model/medico';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private citasmedicoUrl: string;
  private citaspacienteUrl: string;
  private citasUrlSave : string;
  private getPacienteUrl : string;
  private deleteCitaMedicoURL : string;
  private deleteCitaPAcienteURL : string;
  constructor(private http: HttpClient) {
    this.citasmedicoUrl = 'http://localhost:8034/cita/unicomedico/';
    this.citaspacienteUrl = 'http://localhost:8034/cita/unicopaciente/';
    this.citasUrlSave = 'http://localhost:8034/cita/';
    this.getPacienteUrl  = 'http://localhost:8034/cita/getPaciente/';
    this.deleteCitaMedicoURL = 'http://localhost:8034/cita/delete/citamedico/';
    this.deleteCitaPAcienteURL  = 'http://localhost:8034/cita/delete/citapaciente/';

  }

  public findAllMedico(idMedico: string): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.citasmedicoUrl+idMedico);
  }

  public findAllPaciente(idPaciente: string): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.citaspacienteUrl+idPaciente);
  }

  public getPaciente(cita: Int16Array): Observable<Int16Array> {
    return this.http.get<Int16Array>(this.getPacienteUrl+cita);
  }
 
  public save(cita: Cita, idMedico: string, idPaciente :string) {
    return this.http.post<Cita>(this.citasUrlSave+idMedico+"/"+idPaciente+"/addcita", cita);
  }

  public deleteCitaMedico(idMedico: string) {
    return this.http.delete<void>(this.deleteCitaMedicoURL+idMedico);
  }

  public deleteCitaPaciente(idPaciente: string) {
    console.log(this.deleteCitaPAcienteURL+idPaciente);
    return this.http.delete<void>(this.deleteCitaPAcienteURL+idPaciente);
  }

}
