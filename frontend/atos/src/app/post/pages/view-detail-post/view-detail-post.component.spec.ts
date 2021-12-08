import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewDetailPostComponent } from './view-detail-post.component';

const data = {
	userId: 1,
	id: 1,
	title: "Título Post",
	body: "Texto Post",
	comments: [
		{
			postId: 1,
			id: 1,
			name: "Comentario1",
			email: "test@test.com",
			body: "Texto comentario"
		}
	]
};

describe('ViewDetailPostComponent', () => {
  let component: ViewDetailPostComponent;
  let fixture: ComponentFixture<ViewDetailPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ViewDetailPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spyOnProperty(history, "state").and.returnValue({ 'data': data });
    fixture = TestBed.createComponent(ViewDetailPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Post data check', () => {
    const text = fixture.debugElement.nativeElement.querySelector('#text');
    const title = fixture.debugElement.nativeElement.querySelector('#title');

    const commentName = fixture.debugElement.nativeElement.querySelector('#commentName');
    const commentEmail = fixture.debugElement.nativeElement.querySelector('#commentEmail');
    const commentText = fixture.debugElement.nativeElement.querySelector('#commentText');

    expect(title.innerHTML).toBe("Título Post");
    expect(text.innerHTML).toBe("Texto Post");

    expect(commentName.innerHTML).toBe("Comentario1");
    expect(commentEmail.innerHTML).toBe("test@test.com");
    expect(commentText.innerHTML).toBe("Texto comentario");
  });
});
