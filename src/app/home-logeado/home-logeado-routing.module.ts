import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLogeadoPage } from './home-logeado.page';

const routes: Routes = [
  {
    path: '',
    component: HomeLogeadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLogeadoPageRoutingModule {}
