import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular003';
  dadoIzquierdo:string='../assets/img/dado1.png';
  dadoDerecho:string='../assets/img/dado2.png';
numeroInferior:number=0;
numeroSuperior:number=0;
  lanzarDado():void{
   this.numeroInferior = Math.round(Math.random()*6)+1;
   this.numeroSuperior=Math.round(Math.random()*6)+1;
   if(this.numeroInferior>6){
   this.numeroInferior=this.numeroInferior-1;
   }
   if(this.numeroSuperior>6){
    this.numeroSuperior=this.numeroSuperior-1;
    }
     this.dadoIzquierdo='../assets/img/dado'+this.numeroInferior+'.png';
     this.dadoDerecho='../assets/img/dado'+this.numeroSuperior+'.png'
  }
}
