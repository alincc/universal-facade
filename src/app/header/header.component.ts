import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from '../core/store';
import { User, Role } from '../core/model/user';

import { LoginComponent } from '../shared/login/login.component';

import { selectUser, selectIsAuthenticated } from '../core/store/auth';

import * as fromAuth from '../core/store/auth/auth.actions';
import * as fromDialog from '../core/store/dialog/dialog.actions';

@Component({
    selector: 'facade-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

    public authenticated: Observable<boolean>;

    public user: Observable<User>;

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
        this.authenticated = this.store.select(selectIsAuthenticated);
        this.user = this.store.select(selectUser);
    }

    public openLoginDialog() {
        this.store.dispatch(new fromDialog.OpenDialogAction({
            dialog: {
                ref: LoginComponent,
                config: {
                    dialog: {
                        autofocus: true
                    },
                    instance: {
                        title: 'Login'
                    }
                }
            },
            action: fromAuth.LoginAction
        }));
    }

    public logout(): void {
        this.store.dispatch(new fromAuth.LogoutAction());
    }

    public isAdmin(user: User): boolean {
        return Role[user.role] === Role.ROLE_ADMIN;
    }

}
