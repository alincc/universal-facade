import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';
import { LoginDialogComponent } from '../login/login-dialog.component';
import { SharedModule } from '../shared/shared.module';

import { routes } from '../app.routes';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent,
                LoginDialogComponent
            ],
            imports: [
                RouterTestingModule.withRoutes(routes),
                NoopAnimationsModule,
                SharedModule
            ]
        });
        TestBed.overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [LoginDialogComponent],
            },
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

    it('should be able to open login dialog', () => {
        component.openLoginDialog();
    });

});
