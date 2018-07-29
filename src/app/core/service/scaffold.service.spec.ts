import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { REQUEST } from '@nguniversal/express-engine/tokens';

import { ScaffoldService } from './scaffold.service';
import { RestService } from './rest.service';

export function getRequest() {
    return {};
}

describe('ScaffoldService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                { provide: REQUEST, useFactory: (getRequest) },
                RestService,
                ScaffoldService
            ]
        });
    });

    it('should be created', inject([ScaffoldService], (service: ScaffoldService) => {
        expect(service).toBeTruthy();
    }));

});
