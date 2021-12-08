import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private data: any[];
  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {
    this.postService.getPosts().then((data: any[]) => {
      //console.log(data);
      this.data = data;
    })
  }

}