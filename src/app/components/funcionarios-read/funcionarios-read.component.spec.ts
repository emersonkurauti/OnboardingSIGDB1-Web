import { AppModule } from 'src/app/app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionariosReadComponent } from './funcionarios-read.component';

describe('FuncionariosReadComponent', () => {
  let component: FuncionariosReadComponent;
  let fixture: ComponentFixture<FuncionariosReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
