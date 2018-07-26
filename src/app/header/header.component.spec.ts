import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header.component';
import { FormDialogComponent } from '../shared/form/dialog/form-dialog.component';

import { metaReducers, reducers } from '../core/store';

import { routes } from '../app.routes';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
            imports: [
                RouterTestingModule.withRoutes(routes),
                NoopAnimationsModule,
                CoreModule,
                SharedModule,
                StoreModule.forRoot(reducers, {
                    metaReducers
                }),
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
