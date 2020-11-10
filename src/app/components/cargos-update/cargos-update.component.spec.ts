import { AppRoutingModule } from './../../app-routing.module';
import { AppModule } from 'src/app/app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargosUpdateComponent } from './cargos-update.component';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';

describe('CargosUpdateComponent', () => {
  let component: CargosUpdateComponent;
  let fixture: ComponentFixture<CargosUpdateComponent>;
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
    fixture = TestBed.createComponent(CargosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
