import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string= "contador app";
  numero: number =10;
  base: number = 5;

  sumar(){
      this.numero+=this.base;
  }
  restar(){
      this.numero-=this.base;
  }
}
