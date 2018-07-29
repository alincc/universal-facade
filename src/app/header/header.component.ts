import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AppState } from '../core/store';
import { User } from '../core/model/user';

import { FormDialogComponent } from '../shared/form/dialog/form-dialog.component';

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
                ref: FormDialogComponent,
                config: {
                    dialog: {
                        autofocus: true,
                    },
                    instance: {
                        title: 'Login',
                        scaffoldName: 'LoginRequest',
                        submitLabel: 'Login'
                    }
                }
            },
            action: fromAuth.LoginAction
        }));
    }

}
