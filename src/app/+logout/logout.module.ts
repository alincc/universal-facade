import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LogoutComponent } from './logout.component';
import { routes } from './logout.routes';

@NgModule({
    declarations: [LogoutComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class LogoutModule {

    public static routes = routes;

}
