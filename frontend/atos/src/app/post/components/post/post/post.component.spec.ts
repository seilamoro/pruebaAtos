import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostComponent } from './post.component';
import { PostService } from '../../../services/post.service';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let httpMock: HttpTestingController;
  let postService: PostService;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ PostComponent ],
      providers: [
        PostService,
        // reference the new instance of formBuilder from above
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
    injector = getTestBed();
    postService = injector.get(PostService);
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.isNew = true;
    component.postData = null;
    fixture.detectChanges();
  });

  it('should create', () => {
    postService.getUsersTest().subscribe(users => {});
    const req = httpMock.expectOne('http://localhost:3000/users/');
    expect(req.request.method).toBe("GET");

    expect(component).toBeTruthy();
  });
});
