import { inject, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';

import { metaReducers, reducers } from '../store';

import { FormService } from './form.service';

describe('FormService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                StoreModule.forRoot(reducers, {
                    metaReducers
                })
            ],
            providers: [
                FormService
            ]
        });
    });

    it('should be created', inject([FormService], (service: FormService) => {
        expect(service).toBeTruthy();
    }));

});
