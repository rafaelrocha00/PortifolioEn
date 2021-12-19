import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoucoAPoucoComponent } from './pouco-a-pouco.component';

describe('PoucoAPoucoComponent', () => {
  let component: PoucoAPoucoComponent;
  let fixture: ComponentFixture<PoucoAPoucoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoucoAPoucoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoucoAPoucoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
