import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginDialogComponent } from './login/login-dialog.component';

import { routes } from './app.routes';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { ScaffoldEffects } from './shared/store/scaffold/scaffold.effects';

import { CustomRouterStateSerializer, reducerProvider, metaReducers, reducerToken } from './shared/store';

import { environment } from '../environments/environment';

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
        HttpClientModule,
        CoreModule.forRoot(),
        SharedModule,
        EffectsModule.forRoot([
            ScaffoldEffects
        ]), StoreModule.forRoot(reducerToken, {
            metaReducers
        }),
        !environment.production ? StoreDevtoolsModule.instrument({
            maxAge: 25,
        }) : [],
        StoreRouterConnectingModule
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
        reducerProvider
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
