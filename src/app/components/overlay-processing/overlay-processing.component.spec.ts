import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayProcessingComponent } from './overlay-processing.component';

describe('OverlayProcessingComponent', () => {
  let component: OverlayProcessingComponent;
  let fixture: ComponentFixture<OverlayProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
