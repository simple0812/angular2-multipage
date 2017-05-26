import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumablesComponent } from './consumables.component';
import { AuthGuard } from '../shard/auth.guard';

const routes: Routes = [
    { path: '', component: ConsumablesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class ConsumableRoutingModule { }
