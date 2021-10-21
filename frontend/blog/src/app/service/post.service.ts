import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Post } from '../model/Post';
import { Posts } from '../shared/models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  

  private urlpao = 'http://localhost:3000/posts/';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get('http://localhost:3000/posts')
  }

  postMessage(post: Post){
    return this.http.post('http://localhost:3000/posts', post)
  }

   buscarId(idBuscado: string){
    
    return this.http.get<Posts>(this.urlpao + idBuscado);
  }

 
}
