import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './views/home/home.component';
import { CargosCrudComponent } from './views/cargos-crud/cargos-crud.component';
import { CargosReadComponent } from './components/cargos-read/cargos-read.component';
import { CargosCreateComponent } from './components/cargos-create/cargos-create.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      CargosCrudComponent,
      CargosReadComponent,
      CargosCreateComponent,
      NavegacaoComponent
   ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
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
export class AppModule { }
