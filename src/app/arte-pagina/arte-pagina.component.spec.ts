import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtePaginaComponent } from './arte-pagina.component';

describe('ArtePaginaComponent', () => {
  let component: ArtePaginaComponent;
  let fixture: ComponentFixture<ArtePaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtePaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
