import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { LoginDialogComponent } from '../login/login-dialog.component';

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
        loginDialogConfig.panelClass = 'loginPanel';
        this.loginDialog.open(LoginDialogComponent, loginDialogConfig);
    }

}
