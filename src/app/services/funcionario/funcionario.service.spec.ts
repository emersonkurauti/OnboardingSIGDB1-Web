import { TestBed, inject } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { FuncionarioService } from './funcionario.service';

describe('Service: Funcionario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [FuncionarioService]
    });
  });

  it('should ...', inject([FuncionarioService], (service: FuncionarioService) => {
    expect(service).toBeTruthy();
  }));
});
