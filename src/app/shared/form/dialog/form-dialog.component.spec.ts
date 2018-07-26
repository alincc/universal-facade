import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../shared.module';

import { FormDialogComponent } from './form-dialog.component';

import { metaReducers, reducers } from '../../../core/store';

describe('FormDialogComponent', () => {
    let component: FormDialogComponent;
    let fixture: ComponentFixture<FormDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                CoreModule,
                SharedModule,
                StoreModule.forRoot(reducers, {
                    metaReducers
                }),
            ],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: [] }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
