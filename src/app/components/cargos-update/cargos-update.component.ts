import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private fb: FormBuilder, private cargoService: CargoService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cargoService.getCargoById(id).subscribe(cargo => {
      this.cargo = cargo;
    });
    this.validar();
  }

  alterar(): void {
    this.cargo = Object.assign({}, this.form.value);
    this.cargoService.putCargo(this.cargo).subscribe(response => this.router.navigate(['cargos']));
  }

  validar(): void {
    this.form = this.fb.group({
      id: [],
      descricao: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

  cancel(): void {
    this.router.navigate(['cargos']);
  }

}
