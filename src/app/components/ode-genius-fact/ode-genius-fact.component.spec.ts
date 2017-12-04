import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeGeniusFactComponent } from './ode-genius-fact.component';

describe('OdeGeniusFactComponent', () => {
  let component: OdeGeniusFactComponent;
  let fixture: ComponentFixture<OdeGeniusFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeGeniusFactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeGeniusFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
