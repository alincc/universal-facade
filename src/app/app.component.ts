import { Component } from '@angular/core';

@Component({
  selector: 'facade-root',
  template: `
  <h1>Universal Facade</h1>
  <a routerLink="/">Home</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
