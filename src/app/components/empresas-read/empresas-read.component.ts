import { DateFormatConsultaPipePipe } from './../../utils/DateFormatConsultaPipe.pipe';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmpresaService } from './../../services/empresas/empresa.service';
import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Empresa } from './../../models/Empresa';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empresas-read',
  templateUrl: './empresas-read.component.html',
  styleUrls: ['./empresas-read.component.scss'],
  providers: [DateFormatConsultaPipePipe]
})
export class EmpresasReadComponent implements OnInit {

  formFiltro: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  empresas: Empresa[];

  constructor(private empresaService: EmpresaService, private fb: FormBuilder, private toastr: ToastrService,
              private dateFormatPipe: DateFormatConsultaPipePipe) { }

  ngOnInit(): void {
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

  getEmpresas(): void {
    this.empresaService.getEmpresas().subscribe(
      (empresas: Empresa[]) => {
        this.empresas = empresas;
      },
      error => { console.log(error); }
    );
  }

  excluir(empresa: Empresa): void {
    this.empresaService.deleteEmpresa(empresa.id).subscribe(response => {
      this.empresas.splice(this.empresas.indexOf(empresa), 1);
      this.toastr.success('Operação realizada com sucesso!', `Exclusão da empresa ${empresa.nome}.`);
    },
    error => {
      error.error.forEach(erro => {
        this.toastr.error(erro.message, `Falha na Exclusão da empresa  ${empresa.nome}.`);
      });
    });
  }

  filtrar(): void {
    const dtInicio = this.dateFormatPipe.transform(this.formFiltro.get('dataInicio').value);
    const dtFim = this.dateFormatPipe.transform(this.formFiltro.get('dataFim').value);
    this.empresaService.getEmpresaPesquisa(
      this.formFiltro.get('cnpj').value, this.formFiltro.get('nome').value, dtInicio, dtFim)
      .subscribe(
        (response: Empresa[]) => {
          this.empresas = response;
        });
  }
}
