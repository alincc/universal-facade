import { Input } from '@angular/core';

export abstract class AbstractFormComponent {

    @Input() title: string;

    @Input() scaffoldName: string;

    @Input() submitLabel = 'Submit';

    @Input() cancelLabel = 'Cancel';

    @Input() action: any;

    @Input() cancel: any;

}
