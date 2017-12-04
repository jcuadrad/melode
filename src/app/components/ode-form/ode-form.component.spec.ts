import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeFormComponent } from './ode-form.component';

describe('OdeFormComponent', () => {
  let component: OdeFormComponent;
  let fixture: ComponentFixture<OdeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
