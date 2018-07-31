import { Routes } from '@angular/router';

import { Role } from './core/model/user';

export const routes: Routes = [
    { path: 'dashboard', loadChildren: './+dashboard#DashboardModule', canActivate: [], pathMatch: 'full', data: {} },
    { path: 'news', loadChildren: './+news#NewsModule', canActivate: [], pathMatch: 'full', data: {} },
    { path: 'help', loadChildren: './+help#HelpModule', canActivate: [], pathMatch: 'full', data: {} },
    {
        path: 'admin', loadChildren: './+admin#AdminModule', canActivate: [], pathMatch: 'full', data: {
            roles: [Role.ROLE_SUPER_ADMIN, Role.ROLE_ADMIN]
        }
    },
    {
        path: 'settings', loadChildren: './+settings#SettingsModule', canActivate: [], pathMatch: 'full', data: {
            roles: [Role.ROLE_SUPER_ADMIN, Role.ROLE_ADMIN, Role.ROLE_USER]
        }
    },
    {
        path: 'profile', loadChildren: './+profile#ProfileModule', canActivate: [], pathMatch: 'full', data: {
            roles: [Role.ROLE_SUPER_ADMIN, Role.ROLE_ADMIN, Role.ROLE_USER]
        }
    },
    { path: '**', redirectTo: 'dashboard' }
];
