import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'facade-home',
    template: `<h3>{{ message }}</h3>`
})
export class HomeComponent implements OnInit {
    public message: string;

    constructor() { }

    ngOnInit() {
        this.message = 'Hello';
    }

}
