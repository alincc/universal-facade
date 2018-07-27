import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { map, withLatestFrom, filter } from 'rxjs/operators';

import { AppState } from '../';

import { selectDialogIsOpen } from '../dialog';

import * as fromDialog from '../dialog/dialog.actions';
import * as fromForm from './form.actions';

@Injectable()
export class FormEffects {

    constructor(private actions: Actions, private store: Store<AppState>) {

    }

    @Effect() submitForm = this.actions.pipe(
        ofType(fromForm.FormActionTypes.SUBMIT),
        map((action: fromForm.SubmitFormAction) => action.payload),
        map((payload: { action: Action }) => payload.action)
    );

    @Effect({ dispatch: false }) formSubmitSuccess = this.actions.pipe(
        ofType(fromForm.FormActionTypes.SUBMIT_SUCCESS),
        withLatestFrom(this.store.select(selectDialogIsOpen)),
        map(([state]) => state),
        filter((isOpen: boolean) => isOpen),
        map(() => this.store.dispatch(new fromDialog.CloseDialogAction()))
    );

}
