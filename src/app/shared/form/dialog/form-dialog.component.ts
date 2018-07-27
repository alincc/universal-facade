import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'facade-form-dialog',
    templateUrl: './form-dialog.component.html',
    styleUrls: ['./form-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormDialogComponent {

    @Input() name: string;

    @Input() submit: any;

    @Input() cancel: any;

    @Input() submitLabel = 'Submit';

    @Input() cancelLabel = 'Cancel';

    @Input() action: any;

}
