import { Component, ViewEncapsulation, Input } from '@angular/core';

import { AbstractFormComponent } from '../abstract-form.component';

@Component({
    selector: 'facade-form-dialog',
    templateUrl: './form-dialog.component.html',
    styleUrls: ['./form-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormDialogComponent extends AbstractFormComponent {

}
