import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  ngOnInit() {
    Notification.requestPermission().then((result) => {
      console.log(result);
    });

    new Notification('Nueva notificacion', {
      body: 'Cuerpo de la notificacion',
      icon: 'data:image/png;base64,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',
    });
  }

  sendNotification() {
    if (!('Notification' in window)) {
      console.log(
        'Este navegador no es compatible con las notificaciones de escritorio'
      );
    }

    // Comprobamos si los permisos han sido concedidos anteriormente
    else if (Notification.permission === 'granted') {
      // Si es correcto, lanzamos una notificación
      new Notification('Hola!');
    }

    // Si no, pedimos permiso para la notificación
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // Si el usuario nos lo concede, creamos la notificación
        if (permission === 'granted') {
          new Notification('Hola!');
        }
      });
    }
  }
}
