import { Routes } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';
import { Role } from './core/model/user';

export const routes: Routes = [
    { path: 'dashboard', loadChildren: './+dashboard#DashboardModule', canActivate: [], pathMatch: 'full', data: {} },
    { path: 'news', loadChildren: './+news#NewsModule', canActivate: [], pathMatch: 'full', data: {} },
    { path: 'help', loadChildren: './+help#HelpModule', canActivate: [], pathMatch: 'full', data: {} },
    { path: 'settings', loadChildren: './+settings#SettingsModule', canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'profile', loadChildren: './+profile#ProfileModule', canActivate: [AuthGuard], pathMatch: 'full' },
    {
        path: 'admin', loadChildren: './+admin#AdminModule', canActivate: [AuthGuard], data: {
            roles: [Role.ROLE_SUPER_ADMIN, Role.ROLE_ADMIN]
        }
    },
    { path: '**', redirectTo: 'dashboard' }
];
