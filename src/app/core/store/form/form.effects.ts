import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { map, withLatestFrom, filter, switchMap } from 'rxjs/operators';

import { AppState } from '..';
import { AlertComponent } from '../../../shared/alert/alert.component';

import { selectDialogIsOpen } from '../dialog';

import * as fromSnackbar from '../snackbar/snackbar.actions';
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

    @Effect() formSubmitSuccess = this.actions.pipe(
        ofType(fromForm.FormActionTypes.SUBMIT_SUCCESS),
        map((action: fromForm.SubmitFormSuccessAction) => action.payload),
        withLatestFrom(this.store.select(selectDialogIsOpen)),
        map(([payload, state]) => {
            return { isOpen: state, message: payload.message };
        }),
        switchMap((stmsg: { isOpen: boolean, message: string }) => [
            stmsg.isOpen ? new fromDialog.CloseDialogAction() : undefined,
            new fromSnackbar.OpenSnackbarAction({
                snackbar: {
                    ref: AlertComponent,
                    config: {
                        snackbar: {
                            duration: 15000
                        },
                        instance: {
                            type: 'success',
                            message: stmsg.message
                        }
                    }
                }
            })
        ].filter((action: Action) => action !== undefined))
    );

    @Effect() formSubmitFailure = this.actions.pipe(
        ofType(fromForm.FormActionTypes.SUBMIT_FAILURE),
        map((action: fromForm.SubmitFormFailureAction) => action.payload),
        map((payload: { response: any }) => new fromSnackbar.OpenSnackbarAction({
            snackbar: {
                ref: AlertComponent,
                config: {
                    snackbar: {
                        duration: 60000
                    },
                    instance: {
                        type: 'danger',
                        message: payload.response.error
                    }
                }
            }
        }))
    );

}
