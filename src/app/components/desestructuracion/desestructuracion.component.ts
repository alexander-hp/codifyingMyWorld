import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desestructuracion',
  templateUrl: './desestructuracion.component.html',
  styleUrls: ['./desestructuracion.component.css'],
})
export class DesestructuracionComponent implements OnInit {
  constructor() {
    let enumeracion: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // ?Asignacion de variables
    console.groupCollapsed('Asignacion de valores');
    const [cero, uno, , , cuatro, ...restoNumeros] = enumeracion;
    console.log(cero);
    console.log(uno);
    console.log(cuatro);
    console.log(restoNumeros);
    console.groupEnd();

    // ?Asignacion separada de la declaracion
    let once, doce;
    [once, doce] = [11, 12];
    console.groupCollapsed('Asignacion separada de la declaracion');
    console.log(once, doce);
    console.groupEnd();

    // ? Valores por default
    let veintiuno, veintidos, diez;
    [veintiuno = 10, veintidos = 11, diez = 0] = [21, 22, 10];
    console.groupCollapsed('Valores por default');
    console.log(veintiuno, veintidos, diez);
    console.groupEnd();

    // ?Cambios de variable
    console.groupCollapsed('Cambio de variable');
    let a = 1,
      b = 2;
    console.log(`a = ${a}, b = ${b}`);
    [a, b] = [b, a];
    console.log(`a = ${a}, b = ${b}`);

    console.groupEnd();

    // ? Arreglo en arreglo
    console.groupCollapsed('Arreglo en arreglo');
    const ejemploArreglo = [
      1,
      2,
      3,
      [3.5, 3.6, 3.7, 3.8],
      4,
      [4.1, [4.11, 4.12]],
    ];
    console.groupCollapsed('Valor ejemplo arreglo');
    console.table(ejemploArreglo);
    console.groupEnd();

    console.groupCollapsed('Tres decimal');
    let [tresDecimal] = [ejemploArreglo[3]];
    console.table(tresDecimal);
    console.groupEnd();

    console.groupCollapsed('Cuatro decimal');
    let [cuatroDecimal] = [ejemploArreglo[5]];
    console.table(cuatroDecimal);
    console.groupEnd();

    console.groupCollapsed('Cuatro Centecimos');
    let [cuatroCentecimos] = [ejemploArreglo[5][1]];
    let [cuatroCentecimos1] = [cuatroDecimal[1]];
    console.table(cuatroCentecimos);
    console.table(cuatroCentecimos1);
    console.groupEnd();

    console.groupEnd();

    // ?Arreglo con objeto
    console.groupCollapsed('Arreglo con objeto');
    let arregloyObjeto = [
      0,
      1,
      {
        nombre: 'Codifying my world',
        rol: 'developer',
        aplicacion: 'Tiktok',
        videos: 5,
      },
    ];
    console.table(arregloyObjeto);
    let [valorObjeto] = [arregloyObjeto[2]];
    console.log(valorObjeto['aplicacion']);

    let objeto = new Object({
      llave: true,
      objetivo: 'Dar un ejemplo',
      funciona: true,
    });
    console.log(objeto['llave']);
    console.groupEnd();
  }

  ngOnInit(): void {}
}
