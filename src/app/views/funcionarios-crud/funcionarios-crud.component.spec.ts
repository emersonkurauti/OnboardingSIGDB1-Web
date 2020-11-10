import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionariosCrudComponent } from './funcionarios-crud.component';
import { AppModule } from 'src/app/app.module';

describe('FuncionariosCrudComponent', () => {
  let component: FuncionariosCrudComponent;
  let fixture: ComponentFixture<FuncionariosCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
