import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { CommentInfoComponent } from '../comment/comment-info/comment-info.component';
import { CommentCreateComponent } from '../comment/comment-create/comment-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostRoutingModule } from './post-routing.moduoe';


@NgModule({
    declarations:[
        CommentInfoComponent,
        CommentCreateComponent,
        PostCreateComponent,
        PostDetailsComponent,
        PostEditComponent,
        PostInfoComponent,
        PostListComponent
    ],
    imports:[
        CommonModule,
        PostRoutingModule,
        FormsModule,
        
    ]
})
export class PostModule{

}