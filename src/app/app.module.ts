import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, makeStateKey, TransferState } from '@angular/platform-browser';
import { PLATFORM_ID, Inject, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Store } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { routes } from './app.routes';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RootStoreModule } from './core/store/root-store.module';

import { AppState } from './core/store';

import * as fromStore from './core/store/root-store.actions';

export const NGRX_STATE = makeStateKey('NGRX_STATE');

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'universal-facade' }),
        RouterModule.forRoot(routes),
        TransferHttpCacheModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoreModule.forRoot(),
        SharedModule,
        RootStoreModule
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
