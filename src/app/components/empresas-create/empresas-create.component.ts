import { EmpresaService } from './../../services/empresas/empresa.service';
import { Router } from '@angular/router';
import { Empresa } from './../../models/Empresa';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas-create',
  templateUrl: './empresas-create.component.html',
  styleUrls: ['./empresas-create.component.scss']
})
export class EmpresasCreateComponent implements OnInit {

  form: FormGroup;
  empresa: Empresa;

  constructor(private router: Router, private fb: FormBuilder, private empresaService: EmpresaService) { }

  ngOnInit() {
    this.validar();
  }

  salvar(): void {
    this.empresa = Object.assign({}, this.form.value);
    this.empresaService.postEmpresa(this.empresa).subscribe(response => this.router.navigate(['empresas']));
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
