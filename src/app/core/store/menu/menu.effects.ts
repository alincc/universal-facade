import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { defer, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { MenuItem } from '../../model/menu';
import { MenuService } from '../../service/menu.service';

import * as fromAuth from '../auth/auth.actions';
import * as fromMenu from './menu.actions';

@Injectable()
export class MenuEffects {

    constructor(private actions: Actions, private menuService: MenuService) {

    }

    @Effect() loadMenu = this.actions.pipe(
        ofType(fromMenu.MenuActionTypes.LOAD, fromAuth.AuthActionTypes.LOGIN_SUCCESS, fromAuth.AuthActionTypes.GET_USER),
        switchMap(() =>
            this.menuService.get().pipe(
                map((menu: MenuItem[]) => new fromMenu.LoadMenuSuccessAction({ menu })),
                catchError((error) => of(new fromMenu.LoadMenuFailureAction({ error })))
            )
        )
    );

    @Effect() init = defer(() => {
        return of(new fromMenu.LoadMenuAction());
    });

}
