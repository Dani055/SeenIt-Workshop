import { Component, OnInit, Input } from '@angular/core';
import { PostInfo } from '../../shared/models/Post-info';
import { Router } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  @Input() post: PostInfo;
  @Input() desc: string;
  @Input() rank: number;
  constructor(private router: Router,private postService: PostService,) { }

  ngOnInit() {

  }
  isAuthor(commentInfo: Object) {
    return commentInfo['_acl']['creator'] === localStorage.getItem('userId');
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.router.navigate(['/posts']);
      })
  }
}
