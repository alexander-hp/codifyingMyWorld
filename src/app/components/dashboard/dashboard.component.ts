import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  OnDestroy,
} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnDestroy {
  @ViewChild('myModal') myModal: ElementRef;
  listeningMouse: boolean;
  idTimeOut;
  idSetInterval;
  checador;
  saliendo: boolean = false;
  progressValue;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // console.log('mouse move', event);
    let posicionX, posicionY, nuevaPosicionY, nuevaPosicionX;
    this.listeningMouse = true;

    // ? Variables de posicion actual del mouse
    nuevaPosicionX = event.clientX;
    nuevaPosicionY = event.clientY;

    console.log(
      'Nueva posicion {X: ' + nuevaPosicionX + ', Y: ' + nuevaPosicionY + '}'
    );

    if (
      this.listeningMouse &&
      (nuevaPosicionX !== posicionX || nuevaPosicionY !== posicionY)
    ) {
      console.log('Movio el mouse');
      clearTimeout(this.checador);
      this.checador = setTimeout(() => {
        console.log('Mouse inactivo');
        // ? Mostrando modal de logout
        if (this.saliendo == false) {
          this.decrementando();
        }
      }, 3e3);
    }

    posicionX = event.clientX;
    posicionY = event.clientY;
  }

  decrementando(): void {
    this.saliendo = true;
    this.progressValue = 100;
    $(this.myModal.nativeElement).modal('show');
    this.idSetInterval = setInterval(() => {
      this.progressValue = this.progressValue - 10;
      if (this.progressValue <= 0) {
        clearInterval(this.idSetInterval);
        $(this.myModal.nativeElement).modal('hide');
        this.progressValue = 0;
        alert('Ya se salio, Godbye!');
      }
    }, 1000);
  }

  mantenerSesion(): void {
    clearInterval(this.idSetInterval);
    this.saliendo = false;
    $(this.myModal.nativeElement).modal('hide');
  }

  ngOnDestroy() {
    this.listeningMouse = false;
    clearInterval(this.idSetInterval);
    clearInterval(this.idTimeOut);
    clearTimeout(this.checador);
    this.onMouseMove = null;
  }
}
