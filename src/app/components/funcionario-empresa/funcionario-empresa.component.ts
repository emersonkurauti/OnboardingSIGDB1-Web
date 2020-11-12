import { FuncionarioEmpresa } from './../../models/FuncionarioEmpresa';
import { EmpresaService } from './../../services/empresas/empresa.service';
import { Empresa } from './../../models/Empresa';
import { FuncionarioService } from './../../services/funcionario/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-funcionario-empresa',
  templateUrl: './funcionario-empresa.component.html',
  styleUrls: ['./funcionario-empresa.component.scss']
})
export class FuncionarioEmpresaComponent implements OnInit {

  form: FormGroup;
  funcionario: Funcionario;
  empresas: Empresa[];
  funcionarioEmpresa: FuncionarioEmpresa;

  selectedValue: string;
  selectedOption: Empresa;

  constructor(private router: Router, private fb: FormBuilder, private funcionarioService: FuncionarioService,
              private route: ActivatedRoute, private empresaService: EmpresaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.funcionarioService.getFuncionarioById(id).subscribe(funcionario => {
      this.form.get('nome').setValue(funcionario.nome);
      this.funcionario = funcionario;
    });
    this.validar();
    this.empresaService.getEmpresas().subscribe(empresas => this.empresas = empresas);
  }

  validar(): void {
    this.form = this.fb.group({
      nome: [{ disabled: true }],
      empresaNome: ['', [Validators.required]]
    });
  }

  vincular(): void {
    this.funcionarioEmpresa = new FuncionarioEmpresa(this.funcionario.id, this.selectedOption.id);
    this.funcionarioService.patchFuncionario(this.funcionarioEmpresa).subscribe(response => {
      this.router.navigate(['funcionarios']);
      this.toastr.success(`${this.funcionario.nome} vinculado com ${this.selectedOption.nome}.`, 'Operação realizada com sucesso!');
    },
    error => {
      error.error.forEach(erro => {
        this.toastr.error(erro.message, `Falha na vinculação da empresa ${this.selectedOption.nome}.`);
      });
    });
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
    this.form.get('empresaNome').setValue(this.selectedValue);
  }

  cancel(): void {
    this.router.navigate(['funcionarios']);
  }

}
