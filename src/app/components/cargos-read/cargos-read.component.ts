import { CargoService } from './../../services/cargos/cargo.service';
import { Cargo } from './../../models/Cargo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargos-read',
  templateUrl: './cargos-read.component.html',
  styleUrls: ['./cargos-read.component.scss']
})
export class CargosReadComponent implements OnInit {

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
