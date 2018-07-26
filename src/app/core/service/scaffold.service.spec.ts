import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { ScaffoldService } from './scaffold.service';
import { RestService } from './rest.service';

describe('ScaffoldService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
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
