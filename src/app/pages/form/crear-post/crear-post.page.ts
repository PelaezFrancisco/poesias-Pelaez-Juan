import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { PostsService } from 'src/app/service/posts.service';
import { Posts } from '../../../domain/Posts';

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.page.html',
  styleUrls: ['./crear-post.page.scss'],
})
export class CrearPostPage implements OnInit {


  post: Posts = new Posts();
  constructor(public afAuth: AngularFireAuth, private postService: PostsService) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.post);
    this.postService.save(this.post);
  }

}
