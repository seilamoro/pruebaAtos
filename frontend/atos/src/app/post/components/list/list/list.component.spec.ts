import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ListComponent } from './list.component';
import { PostService } from '../../../services/post.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let httpMock: HttpTestingController;
  let postService: PostService;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ ListComponent ],
      providers: [
        PostService
      ]
    })
    .compileComponents();
    injector = getTestBed();
    postService = injector.get(PostService);
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    postService.getPostsTest().subscribe(users => {});
    const req = httpMock.expectOne('http://localhost:3000/posts/');
    expect(req.request.method).toBe("GET");

    expect(component).toBeTruthy();
  });
});
