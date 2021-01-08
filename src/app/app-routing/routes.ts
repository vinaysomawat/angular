import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AndroiddevComponent } from '../androiddev/androiddev.component';
import { CpprofileComponent } from '../cpprofile/cpprofile.component';
import { SoftwaredevComponent } from '../softwaredev/softwaredev.component';
import { WebdevComponent } from '../webdev/webdev.component';

export const routes: Routes = [
    { path: '', component:HomeComponent },
    { path: 'android-development', component:AndroiddevComponent },
    { path: 'competitive-programming', component:CpprofileComponent },
    { path: 'software-development', component:SoftwaredevComponent },
    { path: 'web-development', component:WebdevComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
]
