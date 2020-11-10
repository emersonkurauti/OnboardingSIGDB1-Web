import { AppRoutingModule } from './../../app-routing.module';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpresasCreateComponent } from './empresas-create.component';

describe('EmpresasCreateComponent', () => {
  let component: EmpresasCreateComponent;
  let fixture: ComponentFixture<EmpresasCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [
        { provide: Router, useValue: AppRoutingModule } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
