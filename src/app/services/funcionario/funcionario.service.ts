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

  postFuncionario(funcionario: Funcionario) {
    return this.http.post(this.baseUrl, funcionario);
  }

  deleteFuncionario(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Funcionario>(url);
  }
}
