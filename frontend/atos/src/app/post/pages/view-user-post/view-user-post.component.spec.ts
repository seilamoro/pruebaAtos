import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewUserPostComponent } from './view-user-post.component';

const data = {
  userId: 1,
  id: 1,
  title: "test",
  body: "test",
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

describe('ViewUserPostComponent', () => {
  let component: ViewUserPostComponent;
  let fixture: ComponentFixture<ViewUserPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ViewUserPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spyOnProperty(history, "state").and.returnValue({ 'data': data });
    fixture = TestBed.createComponent(ViewUserPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('User data check', () => {
    const username = fixture.debugElement.nativeElement.querySelector('#username');
    const name = fixture.debugElement.nativeElement.querySelector('#name');
    const email = fixture.debugElement.nativeElement.querySelector('#email');
    const phone = fixture.debugElement.nativeElement.querySelector('#phone');
    const website = fixture.debugElement.nativeElement.querySelector('#website');

    expect(username.innerHTML).toBe("Bret");
    expect(name.innerHTML).toBe("Leanne Graham");
    expect(email.innerHTML).toBe("Sincere@april.biz");
    expect(phone.innerHTML).toBe("1-770-736-8031 x56442");
    expect(website.innerHTML).toBe("hildegard.org");
  });
});
