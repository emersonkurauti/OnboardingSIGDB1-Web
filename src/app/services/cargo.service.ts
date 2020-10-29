import { Cargo } from './../models/Cargo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl = 'http://localhost:54544/api/cargo';
  constructor(private http: HttpClient) { }

  getEvento(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.baseUrl);
  }

  getEventoById(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(`${this.baseUrl}/${id}`);
  }
}
