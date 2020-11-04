/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FuncionariosCrudComponent } from './funcionarios-crud.component';

describe('FuncionariosCrudComponent', () => {
  let component: FuncionariosCrudComponent;
  let fixture: ComponentFixture<FuncionariosCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionariosCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
