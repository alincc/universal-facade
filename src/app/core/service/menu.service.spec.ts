import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { REQUEST } from '@nguniversal/express-engine/tokens';

import { RestService } from './rest.service';
import { MenuService } from './menu.service';

import { getRequest } from '../../app.browser.module';

describe('MenuService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                { provide: REQUEST, useFactory: (getRequest) },
                RestService,
                MenuService
            ]
        });
    });

    it('should be created', inject([MenuService], (service: MenuService) => {
        expect(service).toBeTruthy();
    }));

});
