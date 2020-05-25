import {Routes} from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AndroiddevComponent } from '../androiddev/androiddev.component';
import { CpprofileComponent } from '../cpprofile/cpprofile.component';
import { SoftwaredevComponent } from '../softwaredev/softwaredev.component';
import { WebdevComponent } from '../webdev/webdev.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'androiddev', component:AndroiddevComponent},
    {path: 'cpprofile', component:CpprofileComponent},
    {path: 'softwaredev', component:SoftwaredevComponent},
    {path: 'webdev', component:WebdevComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
]
