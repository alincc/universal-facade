import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AuthService } from './service/auth.service';
import { FormService } from './service/form.service';
import { RestService } from './service/rest.service';
import { ScaffoldService } from './service/scaffold.service';

const MODULES = [
    CommonModule
];

const COMPONENTS = [

];

const PROVIDERS = [
    DatePipe,
    AuthService,
    FormService,
    RestService,
    ScaffoldService
];

@NgModule({
    imports: [
        ...MODULES
    ],
    exports: [
        ...COMPONENTS
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS
    ]
})
export class CoreModule {

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                ...PROVIDERS
            ]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }

}
