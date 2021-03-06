import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { ToastrModule } from 'ngx-toastr';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DateFormatPipePipe } from './utils/DateFormatPipe.pipe';
import { DateTimeFormatPipePipe } from './utils/DateTimeFormatPipe.pipe';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { HomeComponent } from './views/home/home.component';
import { CargosCrudComponent } from './views/cargos-crud/cargos-crud.component';
import { CargosReadComponent } from './components/cargos-read/cargos-read.component';
import { CargosCreateComponent } from './components/cargos-create/cargos-create.component';
import { CargosUpdateComponent } from './components/cargos-update/cargos-update.component';
import { EmpresasCrudComponent } from './views/empresas-crud/empresas-crud.component';
import { EmpresasReadComponent } from './components/empresas-read/empresas-read.component';
import { EmpresasCreateComponent } from './components/empresas-create/empresas-create.component';
import { EmpresasUpdateComponent } from './components/empresas-update/empresas-update.component';
import { FuncionariosCrudComponent } from './views/funcionarios-crud/funcionarios-crud.component';
import { FuncionariosUpdateComponent } from './components/funcionarios-update/funcionarios-update.component';
import { FuncionariosCreateComponent } from './components/funcionarios-create/funcionarios-create.component';
import { FuncionariosReadComponent } from './components/funcionarios-read/funcionarios-read.component';
import { FuncionarioCargoComponent } from './components/funcionario-cargo/funcionario-cargo.component';
import { FuncionarioEmpresaComponent } from './components/funcionario-empresa/funcionario-empresa.component';
import { EmpresaService } from './services/empresas/empresa.service';
import { FuncionarioService } from './services/funcionario/funcionario.service';
import { CargoService } from './services/cargos/cargo.service';
import { APP_BASE_HREF } from '@angular/common';

defineLocale('pt-br', ptBrLocale);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegacaoComponent,
    DateTimeFormatPipePipe,
    DateFormatPipePipe,
    CargosCrudComponent,
    CargosReadComponent,
    CargosCreateComponent,
    CargosUpdateComponent,
    EmpresasCrudComponent,
    EmpresasReadComponent,
    EmpresasCreateComponent,
    EmpresasUpdateComponent,
    FuncionariosCrudComponent,
    FuncionariosReadComponent,
    FuncionariosCreateComponent,
    FuncionariosUpdateComponent,
    FuncionarioEmpresaComponent,
    FuncionarioCargoComponent
   ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EmpresaService,
    CargoService,
    FuncionarioService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private localeService: BsLocaleService) {
    this.localeService.use('pt-br');
  }
}
