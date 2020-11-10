import { Funcionario } from './../../models/Funcionario';
import { CargoService } from 'src/app/services/cargos/cargo.service';
import { FuncionarioService } from './../../services/funcionario/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { Cargo } from 'src/app/models/Cargo';
import { FuncionarioCargo } from 'src/app/models/FuncionarioCargo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
              private route: ActivatedRoute, private cargoService: CargoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.funcionario = new Funcionario();
    const id = +this.route.snapshot.paramMap.get('id');
    this.funcionarioService.getFuncionarioById(id).subscribe(funcionario => {
      this.form.get('nome').setValue(funcionario.nome);
      this.funcionario = funcionario;
    });
    this.validar();
    this.cargoService.getCargos().subscribe(cargos => this.cargos = cargos);
  }

  validar(): void {
    this.form = this.fb.group({
      nome: [{value: '', disabled: true}],
      cargoDescricao: ['', [Validators.required]],
      dataVinculo: ['', [Validators.required]]
    });
  }

  vincular(): void {
    this.funcionarioCargo = new FuncionarioCargo(this.selectedOption.id, this.funcionario.id, this.form.get('dataVinculo').value);
    this.funcionarioService.postFuncionarioCargo(this.funcionarioCargo).subscribe(response => {
      this.router.navigate(['funcionarios']);
      this.toastr.success(`${this.funcionario.nome} vinculado com ${this.selectedOption.descricao}.`, 'Operação realizada com sucesso!');
    },
    error => {
      error.error.forEach(erro => {
        this.toastr.error(erro.message, `Falha na vinculação do cargo ${this.selectedOption.descricao}.`);
      });
    });
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
    this.form.get('cargoDescricao').setValue(this.selectedValue);
  }

  cancel(): void {
    this.router.navigate(['funcionarios']);
  }
}
