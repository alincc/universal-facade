import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

import { FormService } from '../../core/service/form.service';

import { Scaffold, Property, Validation } from '../../core/model/scaffold';
import { validatorConversion } from '../../core/utility/validation.utility';

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

    @Input() request: {
        submit: any,
        success: any,
        failure: any
    };

    public form: Observable<FormGroup>;

    public scaffold: Observable<Scaffold>;

    constructor(private formService: FormService) {

    }

    ngOnInit() {
        this.form = this.formService.getForm(this.name);
        this.scaffold = this.formService.getScaffold(this.name);
    }

    public onSubmit(formValue): void {
        this.submit(formValue);

        this.formService.submitForm({
            ...this.request,
            ...{
                data: formValue
            }
        });
    }

    public onCancel(): void {
        this.cancel();
    }

    public getInvalidMessage(form: FormGroup, property: Property): string {
        let message = '';
        property.validations.forEach((validation: Validation) => {
            const validator = validatorConversion[validation.name];
            if (validator) {
                const control = form.controls[property.name];
                if (!control.valid && control.errors && control.errors[validator.key]) {
                    message += validation.message + ' ';
                }
            } else {
                console.warn('Unknown validation', validation);
            }
        });
        return message;
    }

}
