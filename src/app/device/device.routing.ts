import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesComponent } from './devices.component';
import { AuthGuard } from '../shard/auth.guard';

const routes: Routes = [
    { path: '', component: DevicesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class DeviceRoutingModule { }
