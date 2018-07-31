import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../core/store';

@Component({
    selector: 'facade-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    @Input() title: string;

    @Input() action: any;

    @Input() cancel: any;

    public form: FormGroup;

    constructor(
        private builder: FormBuilder,
        private store: Store<AppState>
    ) {

    }

    ngOnInit() {
        this.form = this.builder.group({
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(32),
                Validators.pattern('^[a-zA-Z0-9]*$')
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(32)
            ])
        });
    }

    public onSubmit(): void {
        this.store.dispatch(new this.action(this.form.value));
    }

    public onCancel(): void {
        this.cancel();
    }

    public isInvalid(field: string): boolean {
        const formControl = this.form.controls[field];
        return formControl.invalid && formControl.dirty;
    }

    public getErrorMessage(field: string): string {
        const errors = this.form.controls[field].errors;
        for (const validation in errors) {
            if (errors.hasOwnProperty(validation)) {
                switch (validation) {
                    case 'required': return field + ' is require';
                    case 'minlength': return field + ' must be at least ' + errors[validation].requiredLength + ' characters';
                    case 'maxlength': return field + ' can have no more than ' + errors[validation].requiredLength + ' characters';
                    case 'pattern': return field + ' can only have alphanumeric characters';
                    default: return 'unknown error';
                }
            }
        }
    }

    public disabled(): boolean {
        return this.form.invalid || this.form.pristine;
    }

}
