import { async, ComponentFixture, TestBed, getTestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ViewNewPostComponent } from './view-new-post.component';
import { PostComponent } from '../../components/post/post/post.component';
import { PostService } from '../../services/post.service';

const data = [
  {
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
];

describe('ViewNewPostComponent', () => {
  let component: ViewNewPostComponent;
  let fixture: ComponentFixture<ViewNewPostComponent>;
  let component1: PostComponent;
  let fixture1: ComponentFixture<PostComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let httpMock: HttpTestingController;
  let postService: PostService;
  let injector: TestBed;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ ViewNewPostComponent, PostComponent ],
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

  afterEach(() => {
    httpMock.verify();
  });

  beforeEach(() => {
    spyOnProperty(history, "state").and.returnValue({ 'data': null });
    
    fixture = TestBed.createComponent(ViewNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixture1 = TestBed.createComponent(PostComponent);
    component1 = fixture1.componentInstance;
    component1.isNew = true;
    fixture1.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check form controls', fakeAsync(() => {
    postService.getUsersTest().subscribe(users => {
      component1.userList = users;
      fixture1.detectChanges();
    
      const selectUser = fixture1.debugElement.nativeElement.querySelector('#user');
      expect(selectUser.value).toBe("0");

      selectUser.value = selectUser.options[1].value;
      selectUser.dispatchEvent(new Event('change'));
      expect(selectUser.value).toBe("1");

      const inputText = fixture1.debugElement.nativeElement.querySelector('#text');
      const inputTitle = fixture1.debugElement.nativeElement.querySelector('#title');

      expect(inputText.value).toBe("");
      inputText.value = "test";
      inputText.dispatchEvent(new Event('input'));
      expect(inputText.value).toBe("test");
      
      expect(inputTitle.value).toBe("");
      inputTitle.value = "test";
      inputTitle.dispatchEvent(new Event('input'));
      expect(inputTitle.value).toBe("test");
    });

    const req = httpMock.expectOne('http://localhost:3000/users/');
    expect(req.request.method).toBe("GET");
    req.flush(data);
  }));

  it('check add post error', fakeAsync(() => {
    postService.getUsersTest().subscribe(users => {
      component1.userList = users;
      fixture1.detectChanges();
   
      const inputText = fixture1.debugElement.nativeElement.querySelector('#text');
      const inputTitle = fixture1.debugElement.nativeElement.querySelector('#title');

      inputText.value = "test";
      inputText.dispatchEvent(new Event('input'));
      inputTitle.value = "test";
      inputTitle.dispatchEvent(new Event('input'));

      const formPost = fixture1.debugElement.nativeElement.querySelector('#formPost');
      formPost.dispatchEvent(new Event('submit'));
      fixture1.detectChanges();
      
      const formError = fixture1.debugElement.nativeElement.querySelector('#formError');
      expect(formError.innerHTML).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:3000/users/');
    expect(req.request.method).toBe("GET");
    req.flush(data);
  }));

  it('check add post ok', fakeAsync(() => {
    postService.getUsersTest().subscribe(users => {
      component1.userList = users;
      fixture1.detectChanges();
    
      const selectUser = fixture1.debugElement.nativeElement.querySelector('#user');
      selectUser.value = selectUser.options[1].value;
      selectUser.dispatchEvent(new Event('change'));
      
      const inputText = fixture1.debugElement.nativeElement.querySelector('#text');
      const inputTitle = fixture1.debugElement.nativeElement.querySelector('#title');

      inputText.value = "test";
      inputText.dispatchEvent(new Event('input'));
      inputTitle.value = "test";
      inputTitle.dispatchEvent(new Event('input'));
      fixture1.detectChanges();

      const formPost = fixture1.debugElement.nativeElement.querySelector('#formPost');
      formPost.dispatchEvent(new Event('submit'));
      
      postService.addPosts('test', 'test', 1).then(resData => {
        fixture1.detectChanges();
        component1.resultOk = true;
        
        const newOk = fixture1.debugElement.nativeElement.querySelector('#newOk');
        expect(newOk.innerHTML).toBeTruthy();

      }).catch(error => {
        fixture1.detectChanges();
        component1.resultOk = false;
      });
    });

    const req = httpMock.expectOne('http://localhost:3000/users/');
    expect(req.request.method).toBe("GET");
    req.flush(data);
  }));
});
