import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, makeStateKey, TransferState } from '@angular/platform-browser';
import { PLATFORM_ID, Inject, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginDialogComponent } from './login/login-dialog.component';

import { routes } from './app.routes';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { ScaffoldEffects } from './shared/store/scaffold/scaffold.effects';
import { StoreEffects } from './shared/store/store.effects';

import { CustomRouterStateSerializer, reducerProvider, metaReducers, reducerToken, AppState } from './shared/store';

import { environment } from '../environments/environment';

import * as fromStore from './shared/store/store.actions';

export const NGRX_STATE = makeStateKey('NGRX_STATE');

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
        SharedModule,
        CoreModule.forRoot(),
        StoreModule.forRoot(reducerToken, {
            metaReducers
        }),
        StoreRouterConnectingModule,
        EffectsModule.forRoot([
            ScaffoldEffects,
            StoreEffects
        ]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        })
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
        reducerProvider
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

    public constructor(
        @Inject(PLATFORM_ID) platformId: string,
        private readonly transferState: TransferState,
        private readonly store: Store<AppState>
    ) {
        if (isPlatformBrowser(platformId)) {
            this.onBrowser();
        } else {
            this.onServer();
        }
    }

    onServer() {
        this.transferState.onSerialize(NGRX_STATE, () => {
            this.store.subscribe((state: any) => {
                return state;
            }).unsubscribe();
        });
    }

    onBrowser() {
        const state = this.transferState.get<any>(NGRX_STATE, {});
        this.transferState.remove(NGRX_STATE);
        this.store.dispatch(new fromStore.RehydrateAction(state));
    }

}
