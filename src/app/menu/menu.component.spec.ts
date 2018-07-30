import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { MenuComponent } from './menu.component';

import { metaReducers, reducers } from '../core/store';

import { routes } from '../app.routes';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MenuComponent
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
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
