import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeFullLyricsComponent } from './ode-full-lyrics.component';

describe('OdeFullLyricsComponent', () => {
  let component: OdeFullLyricsComponent;
  let fixture: ComponentFixture<OdeFullLyricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeFullLyricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeFullLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
