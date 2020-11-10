import { AppModule } from 'src/app/app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpresasUpdateComponent } from './empresas-update.component';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('EmpresasUpdateComponent', () => {
  let component: EmpresasUpdateComponent;
  let fixture: ComponentFixture<EmpresasUpdateComponent>;
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
    fixture = TestBed.createComponent(EmpresasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
