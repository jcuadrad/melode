import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeListComponent } from './ode-list.component';

describe('OdeListComponent', () => {
  let component: OdeListComponent;
  let fixture: ComponentFixture<OdeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
