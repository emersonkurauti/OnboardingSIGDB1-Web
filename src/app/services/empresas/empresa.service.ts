import { Empresa } from './../../models/Empresa';
import { HttpClient } from '@angular/common/http';
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
