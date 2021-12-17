import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensorDaHortaPaginaComponent } from './defensor-da-horta-pagina.component';

describe('DefensorDaHortaPaginaComponent', () => {
  let component: DefensorDaHortaPaginaComponent;
  let fixture: ComponentFixture<DefensorDaHortaPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefensorDaHortaPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensorDaHortaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
