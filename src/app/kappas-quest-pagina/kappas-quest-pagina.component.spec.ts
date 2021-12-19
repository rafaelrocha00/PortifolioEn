import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KappasQuestPaginaComponent } from './kappas-quest-pagina.component';

describe('KappasQuestPaginaComponent', () => {
  let component: KappasQuestPaginaComponent;
  let fixture: ComponentFixture<KappasQuestPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KappasQuestPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KappasQuestPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
