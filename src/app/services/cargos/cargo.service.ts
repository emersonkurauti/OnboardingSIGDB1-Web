import { Cargo } from './../../models/Cargo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl = 'http://localhost:54544/api/cargo';
  constructor(private http: HttpClient) { }

  getCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.baseUrl);
  }

  getCargoById(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(`${this.baseUrl}/${id}`);
  }

  postCargo(cargo: Cargo) {
    return this.http.post(this.baseUrl, cargo);
  }

  putCargo(cargo: Cargo) {
    const url = `${this.baseUrl}/${cargo.id}`;
    return this.http.put<Cargo>(url, cargo);
  }

  deleteCargo(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cargo>(url);
  }
}
