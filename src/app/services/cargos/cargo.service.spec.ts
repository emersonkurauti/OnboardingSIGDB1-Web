import { TestBed, inject } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { CargoService } from './cargo.service';

describe('Service: Cargo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [CargoService]
    });
  });

  it('should ...', inject([CargoService], (service: CargoService) => {
    expect(service).toBeTruthy();
  }));
});
