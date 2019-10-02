import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaOptionComponent } from './cita-option.component';

describe('CitaOptionComponent', () => {
  let component: CitaOptionComponent;
  let fixture: ComponentFixture<CitaOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
