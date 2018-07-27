import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'facade-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AlertComponent {

    @Input() message: string;

}
