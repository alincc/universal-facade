import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { User } from '../../model/user';
import { UsersService } from '../../service/users.service';

import * as fromUsers from './users.actions';

@Injectable()
export class UsersEffects {

    constructor(private actions: Actions, private userService: UsersService) {

    }

    @Effect() loadUsers = this.actions.pipe(
        ofType(fromUsers.UsersActionTypes.LOAD),
        switchMap(() =>
            this.userService.getAll().pipe(
                map((response: any) => response._embedded.users),
                map((users: User[]) => new fromUsers.LoadUsersSuccessAction({ users })),
                catchError((error) => of(new fromUsers.LoadUsersFailureAction({ error })))
            )
        )
    );

}
