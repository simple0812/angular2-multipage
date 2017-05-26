import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppxComponent } from './appx.component';
import { AuthGuard } from '../shard/auth.guard';

const routes: Routes = [
    { path: '', component: AppxComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class AppxRoutingModule { }
