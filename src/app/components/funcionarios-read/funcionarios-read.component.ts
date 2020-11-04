import { FuncionarioConsulta } from './../../models/FuncionarioConsulta';
import { FuncionarioService } from './../../services/funcionario/funcionario.service';
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
  funcionarios: FuncionarioConsulta[];

  constructor(private funcionarioService: FuncionarioService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getFuncionarios();
    this.montarFiltro();
  }

  montarFiltro(): void {
    this.formFiltro = this.fb.group({
      nome: [''],
      cpf: [''],
      dataInicio: [''],
      dataFim: ['']
    });
  }

  getFuncionarios() {
    this.funcionarioService.getFuncionarios().subscribe(
      (funcionarios: FuncionarioConsulta[]) => {
        this.funcionarios = funcionarios;
      },
      error => { console.log(error); }
    );
  }

  excluir(funcionario: FuncionarioConsulta): void {
    this.nomeFuncionarioExcluido = funcionario.nome;
    this.funcionarioService.deleteFuncionario(funcionario.id).subscribe(response => {
      this.funcionarios.splice(this.funcionarios.indexOf(funcionario), 1);
      this.fadeShow = 'show';
    });
  }
}
