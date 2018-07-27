import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs';

import { FormService } from '../../core/service/form.service';

import { AlertComponent } from '../alert/alert.component';
import { AbstractFormComponent } from './abstract-form.component';
import { Scaffold, Property, Validation } from '../../core/model/scaffold';
import { validatorConversion } from '../../core/utility/validation.utility';

@Component({
    selector: 'facade-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormComponent extends AbstractFormComponent implements OnInit {

    public form: Observable<FormGroup>;

    public scaffold: Observable<Scaffold>;

    constructor(private formService: FormService, public snackBar: MatSnackBar) {
        super();
    }

    ngOnInit() {
        this.form = this.formService.getForm(this.scaffoldName);
        this.scaffold = this.formService.getScaffold(this.scaffoldName);
        // TODO: use alert store and effect on form failure
        this.formService.getError(this.scaffoldName).subscribe((response: any) => {
            const alertRef = this.snackBar.openFromComponent(AlertComponent, {
                duration: 10000,
                verticalPosition: 'top'
            });
            alertRef.instance.message = response.error;
        });
    }

    public onSubmit(formValue): void {
        this.formService.submit(new this.action(formValue));
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

    public disabled(form: FormGroup): boolean {
        return !form.valid || form.pristine;
    }

}
