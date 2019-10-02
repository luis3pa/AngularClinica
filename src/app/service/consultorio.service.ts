import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultorio } from '../model/consultorio';

@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {
  private consultoriosUrl: string;

  constructor(private http: HttpClient) { 
    this.consultoriosUrl = 'http://localhost:8034/consultorio/getConsultorio';
  }

  public findAll(): Observable<Consultorio[]> {
    return this.http.get<Consultorio[]>(this.consultoriosUrl);
  }
}
