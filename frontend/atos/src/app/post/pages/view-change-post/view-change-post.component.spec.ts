import { async, ComponentFixture, TestBed, getTestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ViewChangePostComponent } from './view-change-post.component';
import { PostComponent } from '../../components/post/post/post.component';
import { PostService } from '../../services/post.service';

const data = {
	userId: 1,
	id: 1,
	title: "Título Post",
	body: "Texto Post",
	comments: [
		{
			postId: 1,
			id: 1,
			name: "id labore ex et quam laborum",
			email: "Eliseo@gardner.biz",
			body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
		},
		{
			postId: 1,
			id: 2,
			name: "quo vero reiciendis velit similique earum",
			email: "Jayne_Kuhic@sydney.com",
			body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
		}
	],
	userData: {
		id: 1,
		name: "Leanne Graham",
		username: "Bret",
		email: "Sincere@april.biz",
		address: {
			street: "Kulas Light",
			suite: "Apt. 556",
			city: "Gwenborough",
			zipcode: "92998-3874",
			geo: {
				lat: "-37.3159",
				lng: "81.1496"
			}
		},
		phone: "1-770-736-8031 x56442",
		website: "hildegard.org",
		company: {
			name: "Romaguera-Crona",
			catchPhrase: "Multi-layered client-server neural-net",
			bs: "harness real-time e-markets"
		}
	}
};

describe('ViewChangePostComponent', () => {
  let component: ViewChangePostComponent;
  let fixture: ComponentFixture<ViewChangePostComponent>;
  let component1: PostComponent;
  let fixture1: ComponentFixture<PostComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let httpMock: HttpTestingController;
  let postService: PostService;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ ViewChangePostComponent, PostComponent ],
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
    spyOnProperty(history, "state").and.returnValue({ 'data': data });
    fixture = TestBed.createComponent(ViewChangePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

	fixture1 = TestBed.createComponent(PostComponent);
    component1 = fixture1.componentInstance;
    component1.isNew = false;
	component1.postData = data;
    fixture1.detectChanges();
  });

  it('should create', () => {
    postService.getUsersTest().subscribe(users => {});
    const req = httpMock.expectOne('http://localhost:3000/users/');
    expect(req.request.method).toBe("GET");

    expect(component).toBeTruthy();
  });

  it('check form controls', () => {
    postService.getUsersTest().subscribe(users => {});
    const req = httpMock.expectOne('http://localhost:3000/users/');
    expect(req.request.method).toBe("GET");

    const inputText = fixture.debugElement.nativeElement.querySelector('#text');
    const inputTitle = fixture.debugElement.nativeElement.querySelector('#title');

    expect(inputText.value).toBe("Texto Post");
    inputText.value = "test";
    expect(inputText.value).toBe("test");
    
    expect(inputTitle.value).toBe("Título Post");
    inputTitle.value = "test";
    expect(inputTitle.value).toBe("test");
  });

  it('check edit post error', fakeAsync(() => {
    postService.getUsersTest().subscribe(users => {});

    const req = httpMock.expectOne('http://localhost:3000/users/');
    expect(req.request.method).toBe("GET");

	const inputTitle = fixture1.debugElement.nativeElement.querySelector('#title');
	inputTitle.value = "";
	inputTitle.dispatchEvent(new Event('input'));

	const formPost = fixture1.debugElement.nativeElement.querySelector('#formPost');
	formPost.dispatchEvent(new Event('submit'));
	fixture1.detectChanges();
	
	const formError = fixture1.debugElement.nativeElement.querySelector('#formError');
	expect(formError.innerHTML).toBeTruthy();

  }));

  it('check edit post ok', fakeAsync(() => {
    postService.getUsersTest().subscribe(users => {});

    const req = httpMock.expectOne('http://localhost:3000/users/');
    expect(req.request.method).toBe("GET");

	const inputTitle = fixture1.debugElement.nativeElement.querySelector('#title');
	inputTitle.value = "testUnit";
	inputTitle.dispatchEvent(new Event('input'));

	const formPost = fixture1.debugElement.nativeElement.querySelector('#formPost');
	formPost.dispatchEvent(new Event('submit'));
	fixture1.detectChanges();
	
	postService.addPosts('test', 'test', 1).then(resData => {
		fixture1.detectChanges();
		component1.resultOk = true;
		
		const newOk = fixture1.debugElement.nativeElement.querySelector('#newOk');
		expect(newOk.innerHTML).toBeTruthy();
	}).catch(error => {
		fixture1.detectChanges();
		component1.resultOk = false;
	});

  }));
});
