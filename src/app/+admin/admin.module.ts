import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';

import { routes } from './admin.routes';

@NgModule({
    declarations: [
        AdminComponent,
        UsersComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class AdminModule {

    public static routes = routes;

}
