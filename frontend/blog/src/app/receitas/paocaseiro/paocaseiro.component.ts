import { Component, OnInit, Pipe } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/service/post.service';


@Component({
  selector: 'app-paocaseiro',
  templateUrl: './paocaseiro.component.html',
  styleUrls: ['./paocaseiro.component.css']
})

export class PaocaseiroComponent implements OnInit  {

 
  listPost: Post[];
  post: Post = new Post;
  idBuscado : any;
  posts: any;  

   

  constructor(private postService: PostService,
                      ) { }

  ngOnInit(): void {    
    this.findPosts();

   
  }

  findPosts() {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.listPost = data;
    })
  }

  cadastrarMessage(){
    this.postService.postMessage(this.post).subscribe((data: Post) => {
      this.post = data;
      location.assign('/paocaseiro');
    })
  }

  buscarId(){
    this.postService.buscarId(this.idBuscado).subscribe(objetos => this.posts = objetos);
  }
 
  
}
