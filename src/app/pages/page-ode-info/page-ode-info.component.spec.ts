import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOdeInfoComponent } from './page-ode-info.component';

describe('PageOdeInfoComponent', () => {
  let component: PageOdeInfoComponent;
  let fixture: ComponentFixture<PageOdeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOdeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOdeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
