import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SinglePostResolver } from 'src/app/core/resolvers/single-post.resolver';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const postRoutes: Routes = [
    { path: '', component: PostListComponent, canActivate:[AuthGuard]},
    { path: 'user', component: PostListComponent , canActivate:[AuthGuard]},
    { path: 'create', component: PostCreateComponent , canActivate:[AuthGuard]},
    { path: 'edit/:id', component: PostEditComponent , canActivate:[AuthGuard]},
    { path: 'details/:id', component: PostDetailsComponent, resolve: { post: SinglePostResolver }, canActivate:[AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(postRoutes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }
