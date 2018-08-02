import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';

export const routes = [
    {
        path: '', component: AdminComponent, children: [
            { path: 'users', component: UsersComponent },
            { path: '**', redirectTo: 'users' }
        ]
    }
];
