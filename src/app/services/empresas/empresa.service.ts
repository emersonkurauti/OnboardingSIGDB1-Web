import { Funcoes } from './../../utils/Funcoes';
import { FormControl } from '@angular/forms';
import { Empresa } from './../../models/Empresa';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  baseUrl = 'http://localhost:54544/api/empresa';
  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.baseUrl);
  }

  getEmpresaById(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseUrl}/${id}`);
  }

  getEmpresaPesquisa(cnpj: string, nome: string, dtInicio: Date, dtFim: Date): Observable<Empresa[]> {
    let filtro = '';

    if (cnpj) {
      filtro = Funcoes.addFiltro(filtro, 'cnpj', cnpj);
    }

    if (nome) {
      filtro = Funcoes.addFiltro(filtro, 'nome', nome);
    }

    if (dtInicio) {
      filtro = Funcoes.addFiltro(filtro, 'dtInicio', dtInicio);
    }

    if (dtFim) {
      filtro = Funcoes.addFiltro(filtro, 'dtFim', dtFim);
    }

    const options = {
      params: new HttpParams({
        fromString: filtro
      })
    };

    return this.http.get<Empresa[]>(`${this.baseUrl}/pesquisar`, options);
  }

  postEmpresa(empresa: Empresa) {
    return this.http.post(this.baseUrl, empresa);
  }

  putEmpresa(empresa: Empresa) {
    const url = `${this.baseUrl}/${empresa.id}`;
    return this.http.put<Empresa>(url, empresa);
  }

  deleteEmpresa(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Empresa>(url);
  }
}
