import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { PostInfo } from 'src/app/components/shared/models/Post-info';
import { PostService } from '../services/post.service';

@Injectable({
    providedIn: 'root'
})
export class SinglePostResolver implements Resolve<PostInfo>{
    constructor(private postService: PostService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'];
        return this.postService.getById(id)
    }
}