import { AppModule } from 'src/app/app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionarioEmpresaComponent } from './funcionario-empresa.component';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('FuncionarioEmpresaComponent', () => {
  let component: FuncionarioEmpresaComponent;
  let fixture: ComponentFixture<FuncionarioEmpresaComponent>;
  let activatedRouteSpy: any;

  beforeEach(() => {
    activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          id: '6'
        })
      }
    };

    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: Router, useValue: AppRoutingModule } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
