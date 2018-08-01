import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { filter, map, withLatestFrom } from 'rxjs/operators';

import { AppState } from '..';

import { selectLoginRedirect } from '../auth';

import * as fromAuth from '../auth/auth.actions';
import * as fromRouter from './router.actions';

@Injectable()
export class RouterEffects {

    constructor(
        private actions: Actions,
        private router: Router,
        private location: Location,
        private store: Store<AppState>
    ) {

    }

    @Effect({ dispatch: false }) navigate = this.actions.pipe(
        ofType(fromRouter.RouterActionTypes.GO),
        map((action: fromRouter.Go) => action.payload),
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
        withLatestFrom(this.store.select(selectLoginRedirect)),
        map(([action, navigation]) => navigation),
        filter((navigation: fromRouter.RouterNavigation) => navigation !== undefined),
        map(() => new fromAuth.UnsetLoginRedirectAction())
    );

}
