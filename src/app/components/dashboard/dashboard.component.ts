import {
  Component,
  OnDestroy,
  OnInit,
  HostListener,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';

declare let $: any;

// ?Listeners y decoradores
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
@HostListener('document:mousemove', [`$event`])
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('myModal') myModal: ElementRef;
  idTimeOut;
  checador;
  saliendo: boolean = false;
  progressValue: number;
  idSetInterval;
  globalListenFunc: Function;
  listeningMouse: boolean;

  constructor(private renderer: Renderer2) {
    let posicionX, nuevaPoscX, posicionY, nuevaPoscY;

    // ?Escuchando movimiento de mouse
    this.globalListenFunc = this.renderer.listen(
      'document',
      'mousemove',
      (e: MouseEvent) => {
        this.listeningMouse = true;
        nuevaPoscX = e.clientX;
        nuevaPoscY = e.clientY;
        console.log(
          'Nueva Posicion {X: ' + nuevaPoscX + ', Y: ' + nuevaPoscY + '}'
        );

        if (
          this.listeningMouse === true &&
          (nuevaPoscX !== posicionX || nuevaPoscY !== posicionY)
        ) {
          clearTimeout(this.checador);
          this.checador = setTimeout(() => {
            console.log('Mouse inactivo');
            if (this.saliendo == false) {
              this.decrementando();
            }
          }, 2000);
        }

        posicionX = e.clientX;
        posicionY = e.clientY;

        // console.log( 'Antigua Posicion {X: ' + posicionX + ', Y: ' + posicionY + '}');
      }
    );
  }

  ngOnInit(): void {
    // TODO Ejemplo de SetTimeoutConteo
    // this.conteo();
  }

  reiniciandoConteo(): any {
    console.log('Reiniciando Conteo');
    clearTimeout(this.idTimeOut);
    this.conteo();
  }

  conteo() {
    this.idTimeOut = setTimeout(() => {
      console.log('Se acabo el tiempo');
    }, 3000);
  }

  decrementando() {
    this.saliendo = true;
    this.progressValue = 100;
    $(this.myModal.nativeElement).modal('show');
    this.idSetInterval = setInterval(() => {
      this.progressValue = this.progressValue - 10;
      if (this.progressValue <= 0) {
        clearInterval(this.idSetInterval);
        $(this.myModal.nativeElement).modal('hide');
        this.progressValue = 0;
        alert('Ya se salio');
      }
    }, 1000);
  }

  mantenerSesion() {
    clearInterval(this.idSetInterval);
    this.saliendo = false;
    $(this.myModal.nativeElement).modal('hide');
  }

  ngOnDestroy(): void {
    this.listeningMouse = false;
    clearInterval(this.idSetInterval);
    clearInterval(this.idTimeOut);
    clearTimeout(this.checador);
    this.globalListenFunc();
  }
}
