import { Funcionario } from './../../models/Funcionario';
import { FuncionarioConsulta } from './../../models/FuncionarioConsulta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl = 'http://localhost:54544/api/funcionario';
  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<FuncionarioConsulta[]> {
    return this.http.get<FuncionarioConsulta[]>(this.baseUrl);
  }

  getFuncionarioById(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.baseUrl}/${id}`);
  }

  postFuncionario(funcionario: Funcionario) {
    return this.http.post(this.baseUrl, funcionario);
  }

  putFuncionario(funcionario: Funcionario) {
    const url = `${this.baseUrl}/${funcionario.id}`;
    return this.http.put<Funcionario>(url, funcionario);
  }

  deleteFuncionario(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Funcionario>(url);
  }
}
