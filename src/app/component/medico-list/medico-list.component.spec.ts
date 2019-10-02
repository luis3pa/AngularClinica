import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoListComponent } from './medico-list.component';

describe('MedicoListComponent', () => {
  let component: MedicoListComponent;
  let fixture: ComponentFixture<MedicoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
