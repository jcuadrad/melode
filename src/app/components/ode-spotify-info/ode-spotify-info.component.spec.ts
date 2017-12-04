import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeSpotifyInfoComponent } from './ode-spotify-info.component';

describe('OdeSpotifyInfoComponent', () => {
  let component: OdeSpotifyInfoComponent;
  let fixture: ComponentFixture<OdeSpotifyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeSpotifyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeSpotifyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
