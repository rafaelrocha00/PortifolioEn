import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NenhumAdeusParaNosComponent } from './nenhum-adeus-para-nos.component';

describe('NenhumAdeusParaNosComponent', () => {
  let component: NenhumAdeusParaNosComponent;
  let fixture: ComponentFixture<NenhumAdeusParaNosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NenhumAdeusParaNosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NenhumAdeusParaNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
