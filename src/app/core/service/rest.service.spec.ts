import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RestService } from './rest.service';

describe('RestService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                RestService
            ]
        });
    });

    it('should be created', inject([RestService], (service: RestService) => {
        expect(service).toBeTruthy();
    }));

});
