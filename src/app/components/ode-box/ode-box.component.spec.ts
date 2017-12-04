import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeBoxComponent } from './ode-box.component';

describe('OdeBoxComponent', () => {
  let component: OdeBoxComponent;
  let fixture: ComponentFixture<OdeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
