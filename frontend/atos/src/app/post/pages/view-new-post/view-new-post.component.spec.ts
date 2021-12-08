import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewPostComponent } from './view-new-post.component';

describe('ViewNewPostComponent', () => {
  let component: ViewNewPostComponent;
  let fixture: ComponentFixture<ViewNewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
