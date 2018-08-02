import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';

import { UsersComponent } from './users.component';

import { metaReducers, reducers } from '../../core/store';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UsersComponent
            ],
            imports: [
                NoopAnimationsModule,
                CoreModule,
                SharedModule,
                StoreModule.forRoot(reducers, {
                    metaReducers
                }),
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
