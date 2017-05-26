import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumablesComponent } from './consumables.component';
import { AuthGuard } from '../shard/auth.guard';

const routes: Routes = [
    { path: '', component: ConsumablesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class ConsumableRoutingModule { }
