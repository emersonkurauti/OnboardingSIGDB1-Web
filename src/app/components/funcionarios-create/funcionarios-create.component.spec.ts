import { AppModule } from 'src/app/app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionariosCreateComponent } from './funcionarios-create.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

describe('FuncionariosCreateComponent', () => {
  let component: FuncionariosCreateComponent;
  let fixture: ComponentFixture<FuncionariosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [
        { provide: Router, useValue: AppRoutingModule } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
