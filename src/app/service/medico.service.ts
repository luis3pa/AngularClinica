import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medico } from '../model/medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private medicosUrl: string;
  private medicosUrlSave : string;
  private medicosUrlUpdate : string;
  private medicosUrlDelete : string;
  private medicosGetId : string;
  private medicosGetEspecialidad : string;
  private medicosComprobarURL : string;
  //private medicosUrlSave = '/medico/addmedico';
  constructor(private http: HttpClient) {
    this.medicosUrl = 'http://localhost:8034/medico/all';
    this.medicosUrlSave = 'http://localhost:8034/medico/addmedico';
    this.medicosUrlUpdate = 'http://localhost:8034/medico/updatepaciente';
    this.medicosGetId = 'http://localhost:8034/medico/';
    this.medicosUrlDelete = 'http://localhost:8034/medico/delete/';
    this.medicosGetEspecialidad = 'http://localhost:8034/medico/getEspecialidad';
    this.medicosComprobarURL = 'http://localhost:8034/medico/comprobar/';
    //this.medicosUrl = '/medico/all';
    
  }
 
  public findAll(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.medicosUrl);
  }
 
  public save(medico: Medico) {
    return this.http.post<Medico>(this.medicosUrlSave, medico);
  }

  getMedicoId (codTarPro:string ){
    return this.http.get<Medico>(this.medicosGetId+codTarPro);
  }

  public update(medico: Medico) {
    return this.http.put<Medico>(this.medicosUrlUpdate, medico);
  }

  public delete(medico: Medico) {
    console.log(this.medicosUrlDelete+ medico.codTarPro);  
    return this.http.delete<void>(this.medicosUrlDelete+medico.codTarPro);
  }

  getEspecialidad ( ){
    return this.http.get<string[]>(this.medicosGetEspecialidad);
  }

  getcomprobar (codTarPro:string ){
    return this.http.get<number>(this.medicosComprobarURL+codTarPro);
  }
  
}
