import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './views/home/home.component';
import { CargosCrudComponent } from './views/cargos-crud/cargos-crud.component';
import { CargosReadComponent } from './components/cargos-read/cargos-read.component';
import { CargosCreateComponent } from './components/cargos-create/cargos-create.component';
import { CargosUpdateComponent } from './components/cargos-update/cargos-update.component';
import { EmpresasCrudComponent } from './views/empresas-crud/empresas-crud.component';
import { EmpresasReadComponent } from './components/empresas-read/empresas-read.component';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
defineLocale('pt-br', ptBrLocale);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegacaoComponent,
    CargosCrudComponent,
    CargosReadComponent,
    CargosCreateComponent,
    CargosUpdateComponent,
    EmpresasCrudComponent,
    EmpresasReadComponent
   ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private localeService: BsLocaleService) {
    this.localeService.use('pt-br');
  }
}
