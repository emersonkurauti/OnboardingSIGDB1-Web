import { TestBed, inject } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { EmpresaService } from './empresa.service';

describe('Service: Empresa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [EmpresaService]
    });
  });

  it('should ...', inject([EmpresaService], (service: EmpresaService) => {
    expect(service).toBeTruthy();
  }));
});
