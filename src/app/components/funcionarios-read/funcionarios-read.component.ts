import { DateFormatConsultaPipePipe } from './../../utils/DateFormatConsultaPipe.pipe';
import { FuncionarioConsulta } from './../../models/FuncionarioConsulta';
import { FuncionarioService } from './../../services/funcionario/funcionario.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-funcionarios-read',
  templateUrl: './funcionarios-read.component.html',
  styleUrls: ['./funcionarios-read.component.scss'],
  providers: [DateFormatConsultaPipePipe]
})
export class FuncionariosReadComponent implements OnInit {

  formFiltro: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  funcionarios: FuncionarioConsulta[];

  constructor(private funcionarioService: FuncionarioService, private fb: FormBuilder, private toastr: ToastrService,
              private dateFormatPipe: DateFormatConsultaPipePipe) { }

  ngOnInit(): void {
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
    this.funcionarioService.deleteFuncionario(funcionario.id).subscribe(response => {
      this.funcionarios.splice(this.funcionarios.indexOf(funcionario), 1);
      this.toastr.success('Operação realizada com sucesso!', `Exclusão do funcionário ${funcionario.nome}.`);
    },
    error => {
      error.error.forEach(erro => {
        this.toastr.error(erro.message, `Falha na Exclusão do funcionário  ${funcionario.nome}.`);
      });
    });
  }

  filtrar(): void {
    const dtInicio = this.dateFormatPipe.transform(this.formFiltro.get('dataInicio').value);
    const dtFim = this.dateFormatPipe.transform(this.formFiltro.get('dataFim').value);
    this.funcionarioService.getFuncionariosPesquisa(
      this.formFiltro.get('cpf').value, this.formFiltro.get('nome').value, dtInicio, dtFim)
      .subscribe(
        (response: FuncionarioConsulta[]) => {
          this.funcionarios = response;
        });
  }
}
