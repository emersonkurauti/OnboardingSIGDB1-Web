import { AppRoutingModule } from './../../app-routing.module';
import { AppModule } from 'src/app/app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargosCreateComponent } from './cargos-create.component';
import { Router } from '@angular/router';

describe('CargosCreateComponent', () => {
  let component: CargosCreateComponent;
  let fixture: ComponentFixture<CargosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [
        { provide: Router, useValue: AppRoutingModule } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
