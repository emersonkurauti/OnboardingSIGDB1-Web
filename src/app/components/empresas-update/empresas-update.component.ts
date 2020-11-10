import { DateFormatPipePipe } from './../../utils/DateFormatPipe.pipe';
import { EmpresaService } from './../../services/empresas/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from './../../models/Empresa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empresas-update',
  templateUrl: './empresas-update.component.html',
  styleUrls: ['./empresas-update.component.scss'],
  providers: [DateFormatPipePipe]
})
export class EmpresasUpdateComponent implements OnInit {

  form: FormGroup;
  empresa: Empresa;

  constructor(private router: Router, private fb: FormBuilder, private empresaService: EmpresaService,
              private route: ActivatedRoute, private dateFormatPipe: DateFormatPipePipe, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.empresa = new Empresa();
    const id = +this.route.snapshot.paramMap.get('id');
    this.empresaService.getEmpresaById(id).subscribe(empresa => {
      empresa.dataFundacao = this.dateFormatPipe.transform(empresa.dataFundacao);
      this.form.get('id').setValue(empresa.id);
      this.form.get('nome').setValue(empresa.nome);
      this.form.get('cnpj').setValue(empresa.cnpj);
      this.form.get('dataFundacao').setValue(empresa.dataFundacao);
      this.empresa = empresa;
    });
    this.validar();
  }

  alterar(): void {
    this.empresa = Object.assign({}, this.form.value);
    this.empresaService.putEmpresa(this.empresa).subscribe(response => {
      this.router.navigate(['empresas']);
      this.toastr.success(`Alteração da empresa ${this.empresa.nome}.`, 'Operação realizada com sucesso!');
    },
    error => {
      error.error.forEach(erro => {
        this.toastr.error(erro.message, `Falha na alteração da empresa ${this.empresa.nome}.`);
      });
    });
  }

  validar(): void {
    this.form = this.fb.group({
      id: [{value: '', disabled: true}],
      nome: ['', [Validators.required, Validators.maxLength(150)]],
      cnpj: ['', Validators.required],
      dataFundacao: ['']
    });
  }

  cancel(): void {
    this.router.navigate(['empresas']);
  }
}
