import { Component, OnInit } from '@angular/core';
import {APIClientService} from '../services/apiclient.service'

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  user:any;
  users:any;
  posts: any;
  post: any={
    id: null,
    title: "",
    body: "",
    userId: null
  };

  constructor(private api:APIClientService) { }
  ionViewWillEnter(){
    this.getUsuarios();
    this.getPosts();
  }

  ngOnInit() {
  }

  getPosts(){
    this.api.getPosts().subscribe((data)=>{
      this.posts= data
    });
  }

  getUsuarios(){
    this.api.getUsuarios().subscribe((data)=>{
      this.users= data;
      this.posts.reverse();
    });

  }
  getUsuario(userId){
    this.api.getUsuario(userId).subscribe((data)=>{
      this.user= data;
    });

  }
  guardarPost(){
    if (this.post.userId==null) {
      if (this.user==undefined) {
        console.log("Seleccione Usuario")
        return;
      }
      this.post.userId=this.user.id;
      this.api.createPost(this.post).subscribe(
        () =>{
          console.log("Creado Correctamente.");
          this.getPosts();
        },
        error=>{
          console.log("Error"+error)
        }
      );
    }else{
      // HACER UPDATE 

    }
  }
}
