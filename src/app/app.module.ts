import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginDialogComponent } from './login/login-dialog.component';

import { routes } from './app.routes';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginDialogComponent
    ],
    entryComponents: [
        LoginDialogComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'universal-facade' }),
        RouterModule.forRoot(routes),
        TransferHttpCacheModule,
        BrowserAnimationsModule,
        CoreModule.forRoot(),
        SharedModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
