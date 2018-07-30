import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { RestService } from './rest.service';
import { MenuItem } from '../model/menu';

import { environment } from '../../../environments/environment';

@Injectable()
export class MenuService {

    constructor(private restService: RestService) {

    }

    public get(): Observable<MenuItem[]> {
        return this.restService.get<MenuItem[]>(environment.service + '/menu', {
            withCredentials: true
        });
    }

}
