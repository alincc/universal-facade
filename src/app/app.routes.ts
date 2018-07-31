import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'dashboard', loadChildren: './+dashboard#DashboardModule', canActivate: [], pathMatch: 'full', data: {} },
    { path: 'news', loadChildren: './+news#NewsModule', canActivate: [], pathMatch: 'full', data: {} },
    { path: 'help', loadChildren: './+help#HelpModule', canActivate: [], pathMatch: 'full', data: {} },
    { path: 'admin', loadChildren: './+admin#AdminModule', canActivate: [], pathMatch: 'full', data: {} },
    { path: 'settings', loadChildren: './+settings#SettingsModule', canActivate: [], pathMatch: 'full', data: {} },
    { path: 'profile', loadChildren: './+profile#ProfileModule', canActivate: [], pathMatch: 'full', data: {} },
    { path: '**', redirectTo: 'dashboard' }
];
