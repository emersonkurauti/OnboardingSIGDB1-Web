import { DateFormatPipePipe } from './../../utils/DateFormatPipe.pipe';
import { FuncionarioService } from './../../services/funcionario/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-funcionarios-update',
  templateUrl: './funcionarios-update.component.html',
  styleUrls: ['./funcionarios-update.component.scss'],
  providers: [DateFormatPipePipe]
})
export class FuncionariosUpdateComponent implements OnInit {

  form: FormGroup;
  funcionario: Funcionario;

  constructor(private router: Router, private fb: FormBuilder, private funcionarioService: FuncionarioService,
              private route: ActivatedRoute, private dateFormatPipe: DateFormatPipePipe, private toastr: ToastrService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.funcionarioService.getFuncionarioById(id).subscribe(funcionario => {
      funcionario.dataContratacao = this.dateFormatPipe.transform(funcionario.dataContratacao);
      this.funcionario = funcionario;
    });
    this.validar();
  }

  alterar(): void {
    this.funcionario = Object.assign({}, this.form.value);
    this.funcionarioService.putFuncionario(this.funcionario).subscribe(response => {
      this.router.navigate(['funcionarios']);
      this.toastr.success(`Alteração do funcionário ${this.funcionario.nome}.`, 'Operação realizada com sucesso!');
    },
    error => {
      error.error.forEach(erro => {
        this.toastr.error(erro.message, `Falha na alteração do funcionário ${this.funcionario.nome}.`);
      });
    });
  }

  validar(): void {
    this.form = this.fb.group({
      id: [''],
      nome: ['', [Validators.required, Validators.maxLength(150)]],
      cpf: ['', Validators.required],
      dataContratacao: [''],
      empresaId: ['']
    });
  }

  cancel(): void {
    this.router.navigate(['funcionarios']);
  }

}
