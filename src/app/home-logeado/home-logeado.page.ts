import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-logeado',
  templateUrl: './home-logeado.page.html',
  styleUrls: ['./home-logeado.page.scss'],
})
export class HomeLogeadoPage implements OnInit {
  dato: any;
  constructor(private activeroute: ActivatedRoute, private router:Router) { 
    this.activeroute.queryParams.subscribe(params=>{
      //valido si la navegacion tiene parametros
      if(this.router.getCurrentNavigation().extras.state){
        this.dato=this.router.getCurrentNavigation().extras.state.dato;
        console.log(this.dato)
      }
    });
  }

  ngOnInit() {
  }

}
