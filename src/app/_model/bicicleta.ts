export class Bicicleta{
   //atributos
   _color: string="";
   _marca: string="";
   _velocidad: number=0;
   _pinones: number=20;
   _platos: number=4;
   _electrica: boolean =true;
   //constructor
   constructor(color: string,marca: string, velocidad: number, pinones: number, platos: number, electrica:boolean){
    this._color=color;
    this._marca=marca;
    this._velocidad=velocidad;
    this._pinones=pinones;
    this._platos=platos;
    this._electrica=electrica;
   }
   //accesorios
   get color(){
    return "El color de la bicileta es" + this._color
   }
   set color(color){
    this._color=color;
   }
   get marca(){
    return "El marca de la bicileta es" +this._marca
   }
   set marca(marca){
    this._marca=marca;
   }
   get velocidad(){
    return this._velocidad
   }
   set velocidad(velocidad){
    this._velocidad=velocidad;
   }get piñones(){
    return this._pinones
   }
   set piñones(piñones){
    this._pinones=piñones;
   }
   get platos(){
    return this._platos
   }
   set platos(platos){
    this._platos=platos;
   }
   get electrica(){
    return this._electrica
   }
   set electrica(electrica){
    this.electrica=electrica;
   }
   //metodos
   acelerar(velocidad2:number){
      this.velocidad = this.velocidad + velocidad2
      }
   frenar(velocidad2:number){
      this.velocidad=this.velocidad-velocidad2
      } 
}