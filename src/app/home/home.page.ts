import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  dato:String;



  constructor(public toastController: ToastController, private router: Router) {}
  ngOnInit(){

  }

  saludar(){
    this.presentToast("Bienvenido " + this.dato);
  }
  siguiente(){
    let navigationExtras: NavigationExtras={
      state:{dato: this.dato}
    }
    this.router.navigate(["/home-logeado"],navigationExtras)
  }
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "bottom"
    });
    toast.present();
  }
} 
