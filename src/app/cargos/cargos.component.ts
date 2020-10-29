import { Component, OnInit } from '@angular/core';
import { Cargo } from '../models/Cargo';
import { CargoService } from '../services/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.scss']
})
export class CargosComponent implements OnInit {

  cargos: Cargo[];

  constructor(private cargoService: CargoService) { }

  ngOnInit() {
    this.getCargos();
  }

  getCargos() {
    this.cargoService.getEvento().subscribe(
      (cargos: Cargo[]) => { 
        this.cargos = cargos;
      },
      error => { console.log(error); }
    );
  }

}
