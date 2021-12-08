import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { ListComponent } from './components/list/list/list.component';
import { PostComponent } from './components/post/post/post.component';
import { ViewListPostComponent } from './pages/view-list-post/view-list-post.component';
import { ViewNewPostComponent } from './pages/view-new-post/view-new-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewChangePostComponent } from './pages/view-change-post/view-change-post.component';
import { ViewDetailPostComponent } from './pages/view-detail-post/view-detail-post.component';
import { ViewUserPostComponent } from './pages/view-user-post/view-user-post.component';

@NgModule({
  declarations: [ViewNewPostComponent,ViewListPostComponent,PostComponent,ListComponent, ViewChangePostComponent, ViewDetailPostComponent, ViewUserPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PostModule { }