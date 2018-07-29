import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { REQUEST } from '@nguniversal/express-engine/tokens';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

export function getRequest() {
    return { headers: { cookie: document.cookie } };
}

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'universal-facade' }),
        TransferHttpCacheModule,
        BrowserAnimationsModule,
        AppModule
    ],
    // Since the bootstrapped component is not inherited from your
    // imported AppModule, it needs to be repeated here.
    bootstrap: [
        AppComponent
    ],
    providers: [
        { provide: REQUEST, useFactory: (getRequest) }
    ]
})
export class AppBrowserModule {

}
