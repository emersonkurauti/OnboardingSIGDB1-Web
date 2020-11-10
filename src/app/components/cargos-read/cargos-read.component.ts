import { CargoService } from './../../services/cargos/cargo.service';
import { Cargo } from './../../models/Cargo';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cargos-read',
  templateUrl: './cargos-read.component.html',
  styleUrls: ['./cargos-read.component.scss']
})
export class CargosReadComponent implements OnInit {

  cargos: Cargo[];

  constructor(private cargoService: CargoService, private toastr: ToastrService) { }

  ngOnInit(): void {
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
    this.cargoService.deleteCargo(cargo.id).subscribe(response => {
      this.cargos.splice(this.cargos.indexOf(cargo), 1);
      this.toastr.success('Operação realizada com sucesso!', `Exclusão do cargo ${cargo.descricao}.`);
    },
    error => {
      error.error.forEach(erro => {
        this.toastr.error(erro.message, `Falha na Exclusão do cargo  ${cargo.descricao}.`);
      });
    });
  }
}
