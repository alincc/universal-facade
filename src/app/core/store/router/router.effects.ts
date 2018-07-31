import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map } from 'rxjs/operators';

import * as fromRouter from './router.actions';
import * as fromSnackbar from '../snackbar/snackbar.actions';

@Injectable()
export class RouterEffects {

    constructor(
        private actions: Actions,
        private router: Router,
        private location: Location
    ) {

    }

    @Effect({ dispatch: false }) navigate = this.actions.pipe(
        ofType(fromRouter.RouterActionTypes.GO),
        map((action: fromRouter.GoAction) => action.payload),
        map(({ path, query: queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
    );

    @Effect({ dispatch: false }) navigateBack = this.actions.pipe(
        ofType(fromRouter.RouterActionTypes.BACK),
        map(() => this.location.back())
    );

    @Effect({ dispatch: false }) navigateForward = this.actions.pipe(
        ofType(fromRouter.RouterActionTypes.FORWARD),
        map(() => this.location.forward())
    );

    @Effect() navigation = this.actions.pipe(
        ofType('ROUTER_NAVIGATION'),
        map(() => new fromSnackbar.DismissSnackbarAction())
    );

}
