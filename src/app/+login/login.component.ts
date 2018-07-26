import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { FormService } from '../core/service/form.service';

@Component({
    selector: 'facade-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: Observable<FormGroup>;

    constructor(private formService: FormService) {

    }

    public submit(loginRequest: any): void {
        console.log('submit', loginRequest);
    }

    ngOnInit() {
        this.loginForm = this.formService.getFormGroup('LoginRequest');
    }

}

