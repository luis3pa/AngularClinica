import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especialidad } from '../model/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  private especialidadsUrl: string;

  constructor(private http: HttpClient) {this.especialidadsUrl = 'http://localhost:8034/especialidad/getEspecialidad';
  }

  public findAll(): Observable<Especialidad[]> {return this.http.get<Especialidad[]>(this.especialidadsUrl);}
}
