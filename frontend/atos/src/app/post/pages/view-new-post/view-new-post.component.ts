import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/post.interface'

@Component({
  selector: 'app-view-new-post',
  templateUrl: './view-new-post.component.html',
  styleUrls: ['./view-new-post.component.css']
})
export class ViewNewPostComponent implements OnInit {
  private postData: Post;

  constructor(private route:Router) { }

  ngOnInit() {
  }

  btnClick () {
    this.route.navigateByUrl('/post/post');
  };
}
