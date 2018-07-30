import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '.', loadChildren: './+dashboard#DashboardModule', canActivate: [], pathMatch: 'full', data: {} },
    { path: '**', redirectTo: '.' }
];
