import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css'],
})
export class DomComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let lista = document.getElementById('lista');
    console.log(lista);
    let listaHijos = lista.childNodes;
    console.log(listaHijos);
    let padre = lista.parentElement;
    console.log(padre);

    // ?Creando un parrafo
    let nuevoParrafo = document.createElement('p');
    let texto = document.createTextNode('Nuevo texto de parrafo');

    nuevoParrafo.appendChild(texto);
    let idDom = document.getElementById('idDom');
    idDom.appendChild(nuevoParrafo);
  }
}
