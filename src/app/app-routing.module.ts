import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { Hobbies } from './hobbies/hobbies';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'hobbies',
        component: Hobbies
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];

export class AppRoutingModule {}
