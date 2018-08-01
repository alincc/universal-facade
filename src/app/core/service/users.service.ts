import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { RestService } from './rest.service';

import { environment } from '../../../environments/environment';

@Injectable()
export class UsersService {

    constructor(private restService: RestService) {

    }

    public getAll(): Observable<any> {
        const users = this.restService.get<any>(environment.service + '/users', {
            withCredentials: true
        });
        users.subscribe((res: any) => {
            console.log(res);
        });
        return users;
    }

}
