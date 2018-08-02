import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from '../../core/store';
import { User } from '../../core/model/user';

import { selectAllUsers } from '../../core/store/users';

import * as fromUsers from '../../core/store/users/users.actions';

@Component({
    selector: 'facade-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

    public users: Observable<User[]>;

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
        this.users = this.store.select(selectAllUsers);
        this.store.dispatch(new fromUsers.LoadUsersAction());
    }

}
