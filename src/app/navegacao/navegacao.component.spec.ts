import { AppModule } from 'src/app/app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavegacaoComponent } from './navegacao.component';

describe('NavegacaoComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavegacaoComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render nav', () => {
    const fixture = TestBed.createComponent(NavegacaoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const nav = compiled.querySelector('nav');
    expect(nav).toBeTruthy();
  });

  it('should render navbar-brand', () => {
    const fixture = TestBed.createComponent(NavegacaoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const nav = compiled.querySelector('.navbar-brand');
    expect(nav.textContent).toBe('OnboardingSIGDB1-Web');
  });
});
