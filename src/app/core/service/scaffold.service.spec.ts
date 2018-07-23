import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ScaffoldService } from './scaffold.service';
import { RestService } from './rest.service';

describe('ScaffoldService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                RestService,
                ScaffoldService
            ]
        });
    });

    it('should be created', inject([ScaffoldService], (service: ScaffoldService) => {
        expect(service).toBeTruthy();
    }));

});
