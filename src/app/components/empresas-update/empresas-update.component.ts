import { DateFormatPipePipe } from './../../utils/DateFormatPipe.pipe';
import { EmpresaService } from './../../services/empresas/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from './../../models/Empresa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
              private route: ActivatedRoute, private dateFormatPipe: DateFormatPipePipe) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.empresaService.getEmpresaById(id).subscribe(empresa => {
      empresa.dataFundacao = this.dateFormatPipe.transform(empresa.dataFundacao);
      this.empresa = empresa;
    });
    this.validar();
  }

  alterar(): void {
    this.empresa = Object.assign({}, this.form.value);
    this.empresaService.putEmpresa(this.empresa).subscribe(response => this.router.navigate(['empresas']));
  }

  validar(): void {
    this.form = this.fb.group({
      id: [''],
      nome: ['', [Validators.required, Validators.maxLength(150)]],
      cnpj: ['', Validators.required],
      dataFundacao: ['']
    });
  }

  cancel(): void {
    this.router.navigate(['empresas']);
  }
}
