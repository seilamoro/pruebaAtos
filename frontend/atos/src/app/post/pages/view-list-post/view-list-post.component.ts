import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-list-post',
  templateUrl: './view-list-post.component.html',
  styleUrls: ['./view-list-post.component.css']
})
export class ViewListPostComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  btnClick () {
    this.route.navigateByUrl('/post/newPost');
  };

}
