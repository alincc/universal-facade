import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../shared.module';
import { FormComponent } from './form.component';

import { metaReducers, reducers } from '../../core/store';

describe('FormComponent', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CoreModule,
                SharedModule,
                StoreModule.forRoot(reducers, {
                    metaReducers
                }),
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
