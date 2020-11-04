import { FuncionarioService } from './../../services/funcionario/funcionario.service';
import { Funcionario } from './../../models/Funcionario';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-read',
  templateUrl: './funcionarios-read.component.html',
  styleUrls: ['./funcionarios-read.component.scss']
})
export class FuncionariosReadComponent implements OnInit {

  fadeShow = 'fade';
  nomeFuncionarioExcluido: string;
  formFiltro: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getFuncionarios();
    this.montarFiltro();
  }

  montarFiltro(): void {
    this.formFiltro = this.fb.group({
      nome: [''],
      cnpj: [''],
      dataInicio: [''],
      dataFim: ['']
    });
  }

  getFuncionarios() {
    this.funcionarioService.getFuncionarios().subscribe(
      (funcionarios: Funcionario[]) => {
        this.funcionarios = funcionarios;
      },
      error => { console.log(error); }
    );
  }

  excluir(funcionario: Funcionario): void {
    this.nomeFuncionarioExcluido = funcionario.nome;
    this.funcionarioService.deleteFuncionario(funcionario.id).subscribe(response => {
      this.funcionarios.splice(this.funcionarios.indexOf(funcionario), 1);
      this.fadeShow = 'show';
    });
  }
}
