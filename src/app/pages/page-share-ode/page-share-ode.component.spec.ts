import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShareOdeComponent } from './page-share-ode.component';

describe('PageShareOdeComponent', () => {
  let component: PageShareOdeComponent;
  let fixture: ComponentFixture<PageShareOdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageShareOdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShareOdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
