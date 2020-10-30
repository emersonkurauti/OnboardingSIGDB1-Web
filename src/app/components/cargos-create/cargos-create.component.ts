import { CargoService } from './../../services/cargos/cargo.service';
import { Cargo } from './../../models/Cargo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargos-create',
  templateUrl: './cargos-create.component.html',
  styleUrls: ['./cargos-create.component.scss']
})
export class CargosCreateComponent implements OnInit {

  form: FormGroup;
  cargo: Cargo;

  constructor(private router: Router, private fb: FormBuilder, private cargoService: CargoService) { }

  ngOnInit() {
    this.validar();
  }

  salvar(): void {
    this.cargo = Object.assign({}, this.form.value);
    this.cargoService.postCargo(this.cargo).subscribe(
      (novoCargo: Cargo) => {
        this.router.navigate(['cargos']);
      }
    );
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
