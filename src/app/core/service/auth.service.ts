import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../model/user';

import { RestService } from './rest.service';

import { environment } from '../../../environments/environment';


@Injectable()
export class AuthService {

    constructor(private restService: RestService) {

    }

    public hasSession(): boolean {
        return this.restService.hasSession();
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

    public logout(): Observable<string> {
        return this.restService.get<string>(environment.service + '/logout', {
            withCredentials: true,
            responseType: 'text'
        });
    }

    public getUser(): Observable<User> {
        return this.restService.get<User>(environment.service + '/user', {
            withCredentials: true
        });
    }

}
