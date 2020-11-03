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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
