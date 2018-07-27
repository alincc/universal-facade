import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { map } from 'rxjs/operators';

import * as fromForm from './form.actions';

@Injectable()
export class FormEffects {

    constructor(private actions: Actions) {

    }

    @Effect() submitForm = this.actions.pipe(
        ofType(fromForm.FormActionTypes.SUBMIT),
        map((action: fromForm.SubmitFormAction) => action.payload),
        map((payload: { action: Action }) => payload.action)
    );

}
