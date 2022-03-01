import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }
  heroes: string[]=["flash","spiderman", "superman", "hulk"];
  heroeBorrado: string = ' ';

  borrarHeroe(){
    const heroeBorrado = this.heroes.shift()|| " ";
    this.heroeBorrado = heroeBorrado;
  }
  ngOnInit(): void {
  }

}
