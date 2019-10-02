import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoOptionComponent } from './medico-option.component';

describe('MedicoOptionComponent', () => {
  let component: MedicoOptionComponent;
  let fixture: ComponentFixture<MedicoOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
