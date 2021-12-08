import { Router } from '@angular/router';
import { User } from './../../interfaces/post.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user-post',
  templateUrl: './view-user-post.component.html',
  styleUrls: ['./view-user-post.component.css']
})
export class ViewUserPostComponent implements OnInit {

  user : User;
  constructor(private route:Router) { }

  ngOnInit() {
    this.user = history.state.data.userData;
  }

  btnClick () {
    this.route.navigateByUrl('/post/post');
  };
}
