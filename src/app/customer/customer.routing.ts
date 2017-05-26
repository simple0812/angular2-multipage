import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { AuthGuard } from '../shard/auth.guard';

const routes: Routes = [
    { path: '', component: CustomersComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
