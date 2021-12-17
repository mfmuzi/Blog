import { Component, OnInit, Pipe } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-sopalegumes',
  templateUrl: './sopalegumes.component.html',
  styleUrls: ['./sopalegumes.component.css']
})
export class SopalegumesComponent implements OnInit {

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
    this.postService.getPostsSopaLegumes().subscribe((data: Post[]) => {
      this.listPost = data;
    })
  }

  cadastrarMessage(){
    this.postService.postMessageSopaLegumes(this.post).subscribe((data: Post) => {
      this.post = data;
      location.assign('/sopalegumes');
    })
  }

  buscarIdSopaLegumes(){
    this.postService.buscarIdSopaLegumes(this.idBuscado).subscribe(objetos => this.posts = objetos);
  }
 

}
