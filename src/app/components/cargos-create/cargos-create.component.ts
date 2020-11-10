import { CargoService } from './../../services/cargos/cargo.service';
import { Cargo } from './../../models/Cargo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cargos-create',
  templateUrl: './cargos-create.component.html',
  styleUrls: ['./cargos-create.component.scss']
})
export class CargosCreateComponent implements OnInit {

  form: FormGroup;
  cargo: Cargo;

  constructor(private router: Router, private fb: FormBuilder, private cargoService: CargoService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.validar();
  }

  salvar(): void {
    this.cargo = Object.assign({}, this.form.value);
    this.cargoService.postCargo(this.cargo).subscribe(response => {
      this.router.navigate(['cargos']);
      this.toastr.success(`Inclusão do cargo ${this.cargo.descricao}.`, 'Operação realizada com sucesso!');
    },
    error => {
      error.error.forEach(erro => {
        this.toastr.error(erro.message, `Falha na inclusão do cargo ${this.cargo.descricao}.`);
      });
    });
  }

  validar(): void {
    this.form = this.fb.group({
      descricao: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

  cancel(): void {
    this.router.navigate(['cargos']);
  }
}
