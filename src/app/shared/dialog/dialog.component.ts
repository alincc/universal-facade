import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'facade-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DialogComponent {

    @Input() title: string;

}
