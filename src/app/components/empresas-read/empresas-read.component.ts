import { FormGroup, FormBuilder } from '@angular/forms';
import { EmpresaService } from './../../services/empresas/empresa.service';
import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Empresa } from './../../models/Empresa';

@Component({
  selector: 'app-empresas-read',
  templateUrl: './empresas-read.component.html',
  styleUrls: ['./empresas-read.component.scss']
})
export class EmpresasReadComponent implements OnInit {

  fadeShow = 'fade';
  nomeEmpresaExcluida: string;
  formFiltro: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  empresas: Empresa[];

  constructor(private empresaService: EmpresaService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getEmpresas();
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

  getEmpresas() {
    this.empresaService.getEmpresas().subscribe(
      (empresas: Empresa[]) => {
        this.empresas = empresas;
      },
      error => { console.log(error); }
    );
  }

  excluir(empresa: Empresa): void {
    this.nomeEmpresaExcluida = empresa.nome;
    this.empresaService.deleteEmpresa(empresa.id).subscribe(response => {
      this.empresas.splice(this.empresas.indexOf(empresa), 1);
      this.fadeShow = 'show';
    });
  }

}
