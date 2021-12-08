import { Router } from '@angular/router';
import { Post } from './../../interfaces/post.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-detail-post',
  templateUrl: './view-detail-post.component.html',
  styleUrls: ['./view-detail-post.component.css']
})
export class ViewDetailPostComponent implements OnInit {

  post : Post;
  constructor(private route:Router) { }

  ngOnInit() {
    this.post = history.state.data;
    //console.log(this.post);
  }

  btnClick () {
    this.route.navigateByUrl('/post/post');
  };
}
