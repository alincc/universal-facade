import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { RestService } from './rest.service';
import { Scaffold } from '../model/scaffold';

import { environment } from '../../../environments/environment';

@Injectable()
export class ScaffoldService {

    constructor(private restService: RestService) {

    }

    public get(): Observable<Map<string, Scaffold>> {
        return this.restService.get<Map<string, Scaffold>>(environment.service + '/scaffolding');
    }

}
