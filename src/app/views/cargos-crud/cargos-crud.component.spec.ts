import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargosCrudComponent } from './cargos-crud.component';
import { AppModule } from 'src/app/app.module';

describe('CargosCrudComponent', () => {
  let component: CargosCrudComponent;
  let fixture: ComponentFixture<CargosCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
