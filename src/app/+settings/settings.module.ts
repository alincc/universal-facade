import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './settings.component';
import { routes } from './settings.routes';

@NgModule({
    declarations: [SettingsComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class SettingsModule {

    public static routes = routes;

}
