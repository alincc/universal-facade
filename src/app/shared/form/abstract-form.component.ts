import { Input } from '@angular/core';

export abstract class AbstractFormComponent {

    @Input() name: string;

    @Input() cancel: any;

    @Input() submitLabel = 'Submit';

    @Input() cancelLabel = 'Cancel';

    @Input() action: any;

}
