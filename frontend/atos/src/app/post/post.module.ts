import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { ListComponent } from './components/list/list/list.component';
import { PostComponent } from './components/post/post/post.component';
import { ViewListPostComponent } from './pages/view-list-post/view-list-post.component';
import { ViewChangePostComponent } from './pages/view-change-post/view-change-post.component';
import { ViewDetailPostComponent } from './pages/view-detail-post/view-detail-post.component';
import { ViewUserPostComponent } from './pages/view-user-post/view-user-post.component';
import { ViewNewPostComponent } from './pages/view-new-post/view-new-post.component';

@NgModule({
  declarations: [ListComponent, PostComponent, ViewListPostComponent, ViewChangePostComponent, ViewDetailPostComponent, ViewUserPostComponent, ViewNewPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
