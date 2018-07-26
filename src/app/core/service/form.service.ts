import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from '../store';

import { Scaffold, Property } from '../model/scaffold';
import { createValidators } from '../utility/validation.utility';
import { selectScaffoldByName } from '../store/scaffold';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class FormService {

    constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {

    }

    public getFormGroup(name: string): Observable<FormGroup> {
        return this.store.select(selectScaffoldByName(name)).pipe(
            filter((scaffold: Scaffold) => scaffold !== undefined),
            map((scaffold: Scaffold) => {
                const formGroup = this.buildFormGroup(scaffold);
                formGroup.reset();
                return formGroup;
            })
        );
    }

    private buildFormGroup(scaffold: Scaffold): FormGroup {
        const formControls = new Map<string, FormControl>();
        scaffold.properties.forEach((property: Property) => {
            formControls[property.name] = new FormControl({
                disabled: property.disabled
            }, Validators.compose(property.validate ? createValidators(property.validations) : []));
        });
        return this.formBuilder.group(formControls);
    }

}
