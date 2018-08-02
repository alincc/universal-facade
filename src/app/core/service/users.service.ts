import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { RestService } from './rest.service';

import { environment } from '../../../environments/environment';
import { SdrCollection } from '../model/sdr/sdr-collection';

@Injectable()
export class UsersService {

    constructor(private restService: RestService) {

    }

    public getAll(): Observable<SdrCollection> {
        return this.restService.get<SdrCollection>(environment.service + '/users', {
            withCredentials: true
        });
    }

}
