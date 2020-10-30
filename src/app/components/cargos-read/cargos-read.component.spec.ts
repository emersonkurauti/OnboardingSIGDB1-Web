/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CargosReadComponent } from './cargos-read.component';

describe('CargosReadComponent', () => {
  let component: CargosReadComponent;
  let fixture: ComponentFixture<CargosReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargosReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
