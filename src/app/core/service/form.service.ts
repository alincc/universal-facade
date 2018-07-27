import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Store, Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AppState } from '../store';

import { Scaffold, Property } from '../model/scaffold';
import { createValidators } from '../utility/validation.utility';
import { selectScaffoldByName } from '../store/scaffold';

import * as fromForm from '../store/form/form.actions';

@Injectable()
export class FormService {

    constructor(private builder: FormBuilder, private store: Store<AppState>) {

    }

    public submitForm(request: { submit: Action, success: Action, failure: Action, data?: any }): void {
        this.store.dispatch(new fromForm.SubmitFormAction(request));
    }

    public getForm(name: string): Observable<FormGroup> {
        return this.getScaffold(name).pipe(
            map((scaffold: Scaffold) => {
                const formGroup = this.buildFormGroup(scaffold);
                formGroup.reset();
                return formGroup;
            })
        );
    }

    public getScaffold(name: string): Observable<Scaffold> {
        return this.store.select(selectScaffoldByName(name)).pipe(
            filter((scaffold: Scaffold) => scaffold !== undefined)
        );
    }

    private buildFormGroup(scaffold: Scaffold): FormGroup {
        const formControls = new Map<string, FormControl>();
        scaffold.properties.forEach((property: Property) => {
            formControls[property.name] = new FormControl({
                disabled: property.disabled
            }, Validators.compose(property.validate ? createValidators(property.validations) : []));
        });
        return this.builder.group(formControls);
    }

}
