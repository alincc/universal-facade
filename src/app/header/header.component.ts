import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../core/store';

import { FormDialogComponent } from '../shared/form/dialog/form-dialog.component';

import * as fromAuth from '../core/store/auth/auth.actions';
import * as fromDialog from '../core/store/dialog/dialog.actions';

@Component({
    selector: 'facade-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

    constructor(private store: Store<AppState>) {

    }

    public openLoginDialog() {
        this.store.dispatch(new fromDialog.OpenDialogAction({
            dialog: {
                ref: FormDialogComponent,
                config: {
                    name: 'LoginRequest',
                    submitLabel: 'Login'
                }
            },
            action: fromAuth.LoginAction
        }));
    }

}
