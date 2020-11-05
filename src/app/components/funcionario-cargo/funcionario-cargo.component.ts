import { Funcionario } from './../../models/Funcionario';
import { CargoService } from 'src/app/services/cargos/cargo.service';
import { FuncionarioService } from './../../services/funcionario/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { Cargo } from 'src/app/models/Cargo';
import { FuncionarioCargo } from 'src/app/models/FuncionarioCargo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-cargo',
  templateUrl: './funcionario-cargo.component.html',
  styleUrls: ['./funcionario-cargo.component.scss']
})
export class FuncionarioCargoComponent implements OnInit {

  form: FormGroup;
  funcionario: Funcionario;
  cargos: Cargo[];
  funcionarioCargo: FuncionarioCargo;

  selectedValue: string;
  selectedOption: Cargo;

  constructor(private router: Router, private fb: FormBuilder, private funcionarioService: FuncionarioService,
              private route: ActivatedRoute, private cargoService: CargoService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.funcionarioService.getFuncionarioById(id).subscribe(funcionario => {
      this.funcionario = funcionario;
    });
    this.validar();
    this.cargoService.getCargos().subscribe(cargos => this.cargos = cargos);
  }

  validar(): void {
    this.form = this.fb.group({
      nome: [''],
      cargoDescricao: ['', [Validators.required]],
      dataVinculo: ['']
    });
  }

  vincular(): void {
    this.funcionarioCargo = new FuncionarioCargo(this.selectedOption.id, this.funcionario.id, this.form.get('dataVinculo').value);
    this.funcionarioService.postFuncionarioCargo(this.funcionarioCargo).subscribe(response => this.router.navigate(['funcionarios']));
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
  }

  cancel(): void {
    this.router.navigate(['funcionarios']);
  }
}
