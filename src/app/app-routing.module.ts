import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'profile',
        component: Profile
    }
];

export class AppRoutingModule {}
