import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { PostsService } from 'src/app/service/posts.service';
import { Posts } from '../../domain/Posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  posts: any;

  constructor(public afAuth: AngularFireAuth, private postService: PostsService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }


}
