import { FuncionarioService } from './../../services/funcionario/funcionario.service';
import { Funcionario } from 'src/app/models/Funcionario';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-funcionarios-create',
  templateUrl: './funcionarios-create.component.html',
  styleUrls: ['./funcionarios-create.component.scss']
})
export class FuncionariosCreateComponent implements OnInit {

  form: FormGroup;
  funcionario: Funcionario;

  constructor(private router: Router, private fb: FormBuilder, private funcionarioService: FuncionarioService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.validar();
  }

  salvar(): void {
    this.funcionario = Object.assign({}, this.form.value);
    this.funcionarioService.postFuncionario(this.funcionario).subscribe(response => {
      this.router.navigate(['funcionarios']);
      this.toastr.success(`Inclusão do funcionário ${this.funcionario.nome}.`, 'Operação realizada com sucesso!');
    },
    error => {
      error.error.forEach(erro => {
        this.toastr.error(erro.message, `Falha na inclusão do funcionário ${this.funcionario.nome}.`);
      });
    });
  }

  validar(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(150)]],
      cpf: ['', Validators.required],
      dataContratacao: ['']
    });
  }

  cancel(): void {
    this.router.navigate(['funcionarios']);
  }
}
