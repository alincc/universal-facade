import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { AuthEffects } from './auth/auth.effects';
import { FormEffects } from './form/form.effects';
import { ScaffoldEffects } from './scaffold/scaffold.effects';
import { RootStoreEffects } from './root-store.effects';

import { CustomRouterStateSerializer, reducerProvider, metaReducers, reducerToken } from '.';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(reducerToken, {
            metaReducers
        }),
        StoreRouterConnectingModule,
        EffectsModule.forRoot([
            RootStoreEffects,
            ScaffoldEffects,
            FormEffects,
            AuthEffects
        ]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
        })
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
        reducerProvider
    ]
})
export class RootStoreModule { }
