import { Funcionario } from './../../models/Funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl = 'http://localhost:54544/api/funcionario';
  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.baseUrl);
  }
}
