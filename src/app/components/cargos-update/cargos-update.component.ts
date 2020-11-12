import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cargo } from 'src/app/models/Cargo';
import { CargoService } from 'src/app/services/cargos/cargo.service';

@Component({
  selector: 'app-cargos-update',
  templateUrl: './cargos-update.component.html',
  styleUrls: ['./cargos-update.component.scss']
})
export class CargosUpdateComponent implements OnInit {

  form: FormGroup;
  cargo: Cargo;

  constructor(private router: Router, private fb: FormBuilder, private cargoService: CargoService, private route: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cargoService.getCargoById(id).subscribe(cargo => {
      this.form.get('id').setValue(cargo.id);
      this.form.get('descricao').setValue(cargo.descricao);
      this.cargo = cargo;
    });
    this.validar();
  }

  alterar(): void {
    this.cargo = Object.assign({}, this.form.value);
    this.cargoService.putCargo(this.cargo).subscribe(response => {
      this.router.navigate(['cargos']);
      this.toastr.success(`Alteração do cargo ${this.cargo.descricao}.`, 'Operação realizada com sucesso!');
    },
    error => {
      error.error.forEach(erro => {
        this.toastr.error(erro.message, `Falha na alteração do cargo ${this.cargo.descricao}.`);
      });
    });
  }

  validar(): void {
    this.form = this.fb.group({
      id: [{ disabled: true }],
      descricao: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

  cancel(): void {
    this.router.navigate(['cargos']);
  }

}
