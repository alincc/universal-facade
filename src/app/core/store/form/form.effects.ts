import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map } from 'rxjs/operators';

import * as fromForm from './form.actions';

@Injectable()
export class FormEffects {

    // TODO: array of success actions

    // TODO: array of failure actions

    constructor(private actions: Actions) {

    }

    @Effect() submitForm = this.actions.pipe(
        ofType(fromForm.FormActionTypes.SUBMIT),
        map((action: fromForm.SubmitFormAction) => new action.payload.submit(action.payload.data))
    );

    // TODO: effect for success actions to dispatch form success action

    // TODO: effect for success actions to dispatch form failure action

}
