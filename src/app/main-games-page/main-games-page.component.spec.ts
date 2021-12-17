import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGamesPageComponent } from './main-games-page.component';

describe('MainGamesPageComponent', () => {
  let component: MainGamesPageComponent;
  let fixture: ComponentFixture<MainGamesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGamesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
