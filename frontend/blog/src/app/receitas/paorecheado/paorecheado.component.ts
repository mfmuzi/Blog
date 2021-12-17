import { Component, OnInit, Pipe } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-paorecheado',
  templateUrl: './paorecheado.component.html',
  styleUrls: ['./paorecheado.component.css']
})
export class PaorecheadoComponent implements OnInit {

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
    this.postService.getPostsPaoRecheado().subscribe((data: Post[]) => {
      this.listPost = data;
    })
  }

  cadastrarMessage(){
    this.postService.postMessagePaoRecheado(this.post).subscribe((data: Post) => {
      this.post = data;
      location.assign('/paorecheado');
    })
  }

  buscarIdPaoRecheado(){
    this.postService.buscarIdPaoRecheado(this.idBuscado).subscribe(objetos => this.posts = objetos);
  }
 

}
