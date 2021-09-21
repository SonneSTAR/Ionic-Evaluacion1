import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-pass',
  templateUrl: './restablecer-pass.page.html',
  styleUrls: ['./restablecer-pass.page.scss'],
})
export class RestablecerPassPage implements OnInit {
  dato:String;
  constructor(public toastController: ToastController) { }
  email(){
    this.presentToast("Correo enviado a " + this.dato);
  }
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: "bottom"
    });
    toast.present();
  }
  ngOnInit() {
  }

}
