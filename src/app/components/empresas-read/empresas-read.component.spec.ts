import { AppModule } from 'src/app/app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpresasReadComponent } from './empresas-read.component';

describe('EmpresasReadComponent', () => {
  let component: EmpresasReadComponent;
  let fixture: ComponentFixture<EmpresasReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
