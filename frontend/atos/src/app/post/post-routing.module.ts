import { ViewUserPostComponent } from './pages/view-user-post/view-user-post.component';
import { ViewDetailPostComponent } from './pages/view-detail-post/view-detail-post.component';
import { ViewChangePostComponent } from './pages/view-change-post/view-change-post.component';
import { ViewListPostComponent } from './pages/view-list-post/view-list-post.component';
import { ViewNewPostComponent } from './pages/view-new-post/view-new-post.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
        { path: 'post', component: ViewListPostComponent },
        //{ path: '**', redirectTo: 'post' },
        { path: 'newPost', component: ViewNewPostComponent },
        { path: 'changePost', component: ViewChangePostComponent },
        { path: 'detailPost', component: ViewDetailPostComponent },
        { path: 'userPost', component: ViewUserPostComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }