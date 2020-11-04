import { FuncionarioEmpresaComponent } from './components/funcionario-empresa/funcionario-empresa.component';
import { FuncionariosUpdateComponent } from './components/funcionarios-update/funcionarios-update.component';
import { FuncionariosCreateComponent } from './components/funcionarios-create/funcionarios-create.component';
import { FuncionariosCrudComponent } from './views/funcionarios-crud/funcionarios-crud.component';
import { EmpresasUpdateComponent } from './components/empresas-update/empresas-update.component';
import { EmpresasCreateComponent } from './components/empresas-create/empresas-create.component';
import { EmpresasCrudComponent } from './views/empresas-crud/empresas-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargosCrudComponent } from './views/cargos-crud/cargos-crud.component';
import { CargosCreateComponent } from './components/cargos-create/cargos-create.component';
import { CargosUpdateComponent } from './components/cargos-update/cargos-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cargos',
    component: CargosCrudComponent
  },
  {
    path: 'cargos/create',
    component: CargosCreateComponent
  },
  {
    path: 'cargos/update/:id',
    component: CargosUpdateComponent
  },
  {
    path: 'empresas',
    component: EmpresasCrudComponent
  },
  {
    path: 'empresas/create',
    component: EmpresasCreateComponent
  },
  {
    path: 'empresas/update/:id',
    component: EmpresasUpdateComponent
  },
  {
    path: 'funcionarios',
    component: FuncionariosCrudComponent
  },
  {
    path: 'funcionarios/create',
    component: FuncionariosCreateComponent
  },
  {
    path: 'funcionarios/update/:id',
    component: FuncionariosUpdateComponent
  },
  {
    path: 'funcionarios/empresa/:id',
    component: FuncionarioEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
