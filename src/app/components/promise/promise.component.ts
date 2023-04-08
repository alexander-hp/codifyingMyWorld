import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  promesaS: Promise<string>;
  constructor() {}

  ngOnInit(): void {
    this.promesaString(true)
      .then(
        (resp) => {
          console.log('Resolve: ', resp);
        },
        (resp) => {
          console.warn('No funciono, Reject: ', resp);
        }
      )
      .catch((error) => {
        console.log(error);
      });

    this.promesaNumber()
      .then((resp) => {
        console.log(resp);
        return resp * 2;
      })
      .then((resp) => {
        console.log(resp);
        return resp * 2;
      })
      .then((resp) => {
        console.log(resp);
        return resp * 2;
      });
  }

  promesaString(pase: boolean) {
    return (this.promesaS = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (pase) {
          resolve('Todo esta listo y correcto');
        } else {
          reject('No paso en nuestra promesa');
        }
      }, 3000);
    }));
  }

  promesaNumber() {
    let count: number = 0;
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        count += 1;
        // console.log(count);
        resolve(count);
      }, 1000);
    });
  }
}
