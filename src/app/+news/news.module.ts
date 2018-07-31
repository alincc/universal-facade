import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { NewsComponent } from './news.component';
import { routes } from './news.routes';

@NgModule({
    declarations: [NewsComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})
export class NewsModule {

    public static routes = routes;

}
