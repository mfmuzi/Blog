import { Component, OnInit, Pipe } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/service/post.service';


@Component({
  selector: 'app-saladarussa',
  templateUrl: './saladarussa.component.html',
  styleUrls: ['./saladarussa.component.css']
})
export class SaladarussaComponent implements OnInit {
   
  listPost: Post[];
  post: Post = new Post;
  idBuscado : any;
  posts: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }
  findPosts() {
    this.postService.getPostsSaladaRussa().subscribe((data: Post[]) => {
      this.listPost = data;
    })
  }

  cadastrarMessage(){
    this.postService.postMessageSaladaRussa(this.post).subscribe((data: Post) => {
      this.post = data;
      location.assign('/saladarussa');
    })
  }

  buscarIdSaladaRussa(){
    this.postService.buscarIdSaladaRussa(this.idBuscado).subscribe(objetos => this.posts = objetos);
  }

}
