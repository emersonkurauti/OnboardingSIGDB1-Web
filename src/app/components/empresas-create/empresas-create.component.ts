import { EmpresaService } from './../../services/empresas/empresa.service';
import { Router } from '@angular/router';
import { Empresa } from './../../models/Empresa';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empresas-create',
  templateUrl: './empresas-create.component.html',
  styleUrls: ['./empresas-create.component.scss']
})
export class EmpresasCreateComponent implements OnInit {

  form: FormGroup;
  empresa: Empresa;

  constructor(private router: Router, private fb: FormBuilder, private empresaService: EmpresaService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.empresa = new Empresa();
    this.validar();
  }

  salvar(): void {
    this.empresa = Object.assign({}, this.form.value);
    this.empresaService.postEmpresa(this.empresa).subscribe(response => {
      this.router.navigate(['empresas']);
      this.toastr.success(`Inclusão da empresa ${this.empresa.nome}.`, 'Operação realizada com sucesso!');
    },
    error => {
      error.error.forEach(erro => {
        this.toastr.error(erro.message, `Falha na inclusão da empresa ${this.empresa.nome}.`);
      });
    });
  }

  validar(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(150)]],
      cnpj: ['', Validators.required],
      dataFundacao: ['']
    });
  }

  cancel(): void {
    this.router.navigate(['empresas']);
  }

}
