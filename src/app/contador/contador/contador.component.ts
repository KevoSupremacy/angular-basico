import {Component} from "@angular/core"

@Component({
    //nombre del tag HTML al
    //que se va a llamar y en el que se van
    //a meter components
    selector: "app-contador",
    //nombre del component que se va a pegar
    //en el tag del selector
    template: `
    
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong> {{base}} </strong></h3>

        <button (click)="acumular(base)" > + {{base}} </button>

        <span>{{numero}}</span>

        <button (click)="acumular(-base)" > - {{base}} </button>

    `
})

export class ContadorComponent {
    
  //variables/valores que se pueden meter
  //usando {{}}
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular( valor: number ) {
    this.numero += valor;
  }

}