import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    templateUrl: "contador.component.html"
   
})
export class ContadorComponent{

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