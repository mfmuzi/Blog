import { Component, OnInit, Pipe } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/service/post.service';


@Component({
  selector: 'app-cremepalmito',
  templateUrl: './cremepalmito.component.html',
  styleUrls: ['./cremepalmito.component.css']
})
export class CremepalmitoComponent implements OnInit {

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
    this.postService.getPostsCremePalmito().subscribe((data: Post[]) => {
      this.listPost = data;
    })
  }

  cadastrarMessage(){
    this.postService.postMessageCremePalmito(this.post).subscribe((data: Post) => {
      this.post = data;
      location.assign('/cremepalmito');
    })
  }

  buscarIdCremePalmito(){
    this.postService.buscarIdCremePalmito(this.idBuscado).subscribe(objetos => this.posts = objetos);
  }
 
  
}

