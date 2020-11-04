import { FuncionarioEmpresa } from './../../models/FuncionarioEmpresa';
import { EmpresaService } from './../../services/empresas/empresa.service';
import { Empresa } from './../../models/Empresa';
import { FuncionarioService } from './../../services/funcionario/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';

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
              private route: ActivatedRoute, private empresaService: EmpresaService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.funcionarioService.getFuncionarioById(id).subscribe(funcionario => {
      this.funcionario = funcionario;
    });
    this.validar();
    this.empresaService.getEmpresas().subscribe(empresas => this.empresas = empresas);
  }

  validar(): void {
    this.form = this.fb.group({
      nome: [''],
      empresaNome: ['', [Validators.required]]
    });
  }

  vincular(): void {
    this.funcionarioEmpresa = new FuncionarioEmpresa(this.funcionario.id, this.selectedOption.id);
    this.funcionarioService.patchFuncionario(this.funcionarioEmpresa).subscribe(response => this.router.navigate(['funcionarios']));
  }

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
  }

  cancel(): void {
    this.router.navigate(['funcionarios']);
  }

}
