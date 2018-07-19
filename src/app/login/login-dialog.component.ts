import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'facade-login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginDialogComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<LoginDialogComponent>) {

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', []],
            password: ['', []]
        });
    }

    public submit() {
        console.log(this.loginForm.value);
    }

}

