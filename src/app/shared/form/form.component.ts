import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

import { FormService } from '../../core/service/form.service';

import { Scaffold } from '../../core/model/scaffold';

@Component({
    selector: 'facade-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

    @Input() name: string;

    @Input() submit: Function;

    @Input() cancel: Function;

    @Input() submitLabel = 'Submit';

    @Input() cancelLabel = 'Cancel';

    public form: Observable<FormGroup>;

    public scaffold: Observable<Scaffold>;

    constructor(private formService: FormService) {

    }

    ngOnInit() {
        this.form = this.formService.getFormGroup(this.name);
        this.scaffold = this.formService.getScaffold(this.name);
    }

    public onSubmit(formValue): void {
        this.submit(formValue);
    }

    public onCancel(): void {
        this.cancel();
    }

}
