import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

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

    public form: Observable<FormGroup>;

    constructor(
        private builder: FormBuilder,
        private store: Store<AppState>
    ) {

    }

    ngOnInit() {
        this.form = new Observable((observer) => {
            const formGroup = this.builder.group({
                username: new FormControl({
                    disabled: false
                }, []),
                password: new FormControl({
                    disabled: false
                }, [])
            });
            formGroup.reset();
            observer.next(formGroup);
            observer.complete();
        });
    }

    public onSubmit(loginRequest: { username: string, password: string }): void {
        this.store.dispatch(new this.action(loginRequest));
    }

    public onCancel(): void {
        this.cancel();
    }

    public disabled(form: FormGroup): boolean {
        return !form.valid || form.pristine;
    }

}
