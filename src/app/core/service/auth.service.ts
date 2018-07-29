import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../model/user';

import { RestService } from './rest.service';

import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

    constructor(private restService: RestService) {

    }

    public login(username, password): Observable<User> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        const data = `username=${username}&password=${password}`;
        return this.restService.post<User>(environment.service + '/login', data, {
            headers, withCredentials: true
        });
    }

    public getUser(): Observable<User> {
        console.log('get user');
        return this.restService.get<User>(environment.service + '/user', {
            withCredentials: true
        });
    }

}
