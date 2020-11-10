import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpresasCrudComponent } from './empresas-crud.component';
import { AppModule } from 'src/app/app.module';

describe('EmpresasCrudComponent', () => {
  let component: EmpresasCrudComponent;
  let fixture: ComponentFixture<EmpresasCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
