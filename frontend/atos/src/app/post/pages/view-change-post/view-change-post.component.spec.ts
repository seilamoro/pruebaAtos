import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChangePostComponent } from './view-change-post.component';

describe('ViewChangePostComponent', () => {
  let component: ViewChangePostComponent;
  let fixture: ComponentFixture<ViewChangePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChangePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChangePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
