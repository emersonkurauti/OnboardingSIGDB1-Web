import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargosReadComponent } from './cargos-read.component';
import { AppModule } from 'src/app/app.module';

describe('CargosReadComponent', () => {
  let component: CargosReadComponent;
  let fixture: ComponentFixture<CargosReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
