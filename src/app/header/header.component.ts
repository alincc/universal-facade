import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { FormDialogComponent } from '../shared/form/dialog/form-dialog.component';

import * as fromAuth from '../core/store/auth/auth.actions';

@Component({
    selector: 'facade-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

    constructor(private loginDialog: MatDialog) {

    }

    public openLoginDialog() {
        const loginDialogConfig = new MatDialogConfig();
        loginDialogConfig.autoFocus = true;

        const loginDialogRef = this.loginDialog.open(FormDialogComponent, loginDialogConfig);
        loginDialogRef.componentInstance.name = 'LoginRequest';
        loginDialogRef.componentInstance.submitLabel = 'Login';
        loginDialogRef.componentInstance.submit = (data) => console.log(data);
        loginDialogRef.componentInstance.cancel = () => loginDialogRef.close();

        loginDialogRef.componentInstance.request = {
            submit: fromAuth.LoginAction,
            success: fromAuth.LoginSuccessAction,
            failure: fromAuth.LoginFailureAction,
        };
    }

}
