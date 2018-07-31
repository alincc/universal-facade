import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { routes } from './profile.routes';

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class ProfileModule {

    public static routes = routes;

}
