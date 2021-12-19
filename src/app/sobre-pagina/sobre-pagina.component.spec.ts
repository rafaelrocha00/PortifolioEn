import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrePaginaComponent } from './sobre-pagina.component';

describe('SobrePaginaComponent', () => {
  let component: SobrePaginaComponent;
  let fixture: ComponentFixture<SobrePaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrePaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
