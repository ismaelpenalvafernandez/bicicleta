import { Component } from '@angular/core';
import { Bicicleta } from '../_model/bicicleta';

@Component({
  selector: 'app-bibicleta',
  templateUrl: './bibicleta.component.html',
  styleUrls: ['./bibicleta.component.css']
})
export class BibicletaComponent {
  color: string="";
  texto: string=""
  marca: string="";
  velocidad: number=0;
  pinones: number=20;
  platos: number=4;
  electrica: boolean =true;
  velocidad2: number=0;
  bicicleta: Bicicleta = new Bicicleta(this.color, this.marca, this.velocidad, this.pinones, this.platos, this.electrica)

  constructor(){ }
  ngOnInit(): void{

  }
  modificarsubir(){
    this.bicicleta.acelerar(this.velocidad2)
    console.log(this.velocidad2)
  }
  modificarbajar(){
    this.bicicleta.frenar(this.velocidad2)
    console.log(this.velocidad2)
    
  }
}
