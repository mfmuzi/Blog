import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/Post';
import { Posts } from '../shared/models/posts';



@Injectable({
  providedIn: 'root'
})
export class PostService {


  private urlPaoCaseiro = 'http://localhost:3000/postsPaoCaseiro/';
  private urlPaoRecheado = "http://localhost:3000/postsPaoRecheado/";
  private urlTorta = "http://localhost:3000/postsTorta/";
  private urlSaladaRussa = "http://localhost:3000/postsSaladaRussa/";
  private urlSopaLegumes = "http://localhost:3000/postsSopaLegumes/";
  private urlCremePalmito = "http://localhost:3000/postsCremePalmito/";

  constructor(private http: HttpClient) { }

  getPostsPaoCaseiro() {
    return this.http.get('http://localhost:3000/postsPaoCaseiro')
  }

  postMessagePaoCaseiro(post: Post) {
    return this.http.post('http://localhost:3000/postsPaoCaseiro', post)
  }

  getPostsTorta() {
    return this.http.get('http://localhost:3000/postsTorta')
  }

  postMessageTorta(post: Post) {
    return this.http.post('http://localhost:3000/postsTorta', post)
  }

  getPostsSaladaRussa() {
    return this.http.get('http://localhost:3000/postsSaladaRussa')
  }

  postMessageSaladaRussa(post: Post) {
    return this.http.post('http://localhost:3000/postsSaladaRussa', post)
  }

  getPostsPaoRecheado() {
    return this.http.get('http://localhost:3000/postsPaoRecheado')
  }

  postMessagePaoRecheado(post: Post) {
    return this.http.post('http://localhost:3000/postsPaoRecheado', post)
  }

  getPostsSopaLegumes() {
    return this.http.get('http://localhost:3000/postsSopaLegumes')
  }

  postMessageSopaLegumes(post: Post) {
    return this.http.post('http://localhost:3000/postsSopaLegumes', post)
  }

  getPostsCremePalmito() {
    return this.http.get('http://localhost:3000/postsCremePalmito')
  }

  postMessageCremePalmito(post: Post) {
    return this.http.post('http://localhost:3000/postsCremePalmito', post)
  }

  buscarIdPaoCaseiro(id: string) {
    return this.http.get<Posts>(this.urlPaoCaseiro + `${id}`);
  }
  buscarIdPaoRecheado(id: string) {
    return this.http.get<Posts>(this.urlPaoRecheado + `${id}`);
  }
  buscarIdSaladaRussa(id: string) {
    return this.http.get<Posts>(this.urlSaladaRussa + `${id}`);
  }
  buscarIdTorta(id: string) {
    return this.http.get<Posts>(this.urlTorta + `${id}`);
  }
  buscarIdSopaLegumes(id: string) {
    return this.http.get<Posts>(this.urlSopaLegumes + `${id}`);
  }
  buscarIdCremePalmito(id: string) {
    return this.http.get<Posts>(this.urlCremePalmito + `${id}`);
  }


}
