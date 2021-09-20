import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeLogeadoPageRoutingModule } from './home-logeado-routing.module';

import { HomeLogeadoPage } from './home-logeado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeLogeadoPageRoutingModule
  ],
  declarations: [HomeLogeadoPage]
})
export class HomeLogeadoPageModule {}
