import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HelpComponent } from './help.component';
import { routes } from './help.routes';

@NgModule({
    declarations: [HelpComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class HelpModule {

    public static routes = routes;

}
