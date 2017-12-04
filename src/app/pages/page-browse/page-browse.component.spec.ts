import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBrowseComponent } from './page-browse.component';

describe('PageBrowseComponent', () => {
  let component: PageBrowseComponent;
  let fixture: ComponentFixture<PageBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
