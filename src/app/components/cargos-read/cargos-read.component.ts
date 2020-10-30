import { CargoService } from './../../services/cargos/cargo.service';
import { Cargo } from './../../models/Cargo';
import { Component, OnInit, DebugElement } from '@angular/core';

@Component({
  selector: 'app-cargos-read',
  templateUrl: './cargos-read.component.html',
  styleUrls: ['./cargos-read.component.scss']
})
export class CargosReadComponent implements OnInit {

  fadeShow = 'fade';
  descCargoExcluido: string;
  cargos: Cargo[];

  constructor(private cargoService: CargoService) { }

  ngOnInit() {
    this.getCargos();
  }

  getCargos() {
    this.cargoService.getCargos().subscribe(
      (cargos: Cargo[]) => { 
        this.cargos = cargos;
      },
      error => { console.log(error); }
    );
  }

  excluir(cargo: Cargo): void {
    this.descCargoExcluido = cargo.descricao;
    this.cargoService.deleteCargo(cargo.id).subscribe(response => {
      this.cargos.splice(this.cargos.indexOf(cargo), 1);
      this.fadeShow = 'show';
    });
  }

  fecharAlerta(): void {
    this.fadeShow = 'fade';
  }
}
