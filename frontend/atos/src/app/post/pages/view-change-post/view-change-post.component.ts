import { Router } from '@angular/router';
import { Post } from './../../interfaces/post.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-change-post',
  templateUrl: './view-change-post.component.html',
  styleUrls: ['./view-change-post.component.css']
})
export class ViewChangePostComponent implements OnInit {

  private postData: Post;

  constructor(private route:Router) { }

  ngOnInit() {
    this.postData = history.state.data;
    //console.log(this.postData);
  }

  btnClick () {
    this.route.navigateByUrl('/post/post');
  };

}
