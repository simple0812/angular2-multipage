import { AppComponent } from './app.component';
import { AuthGuard } from '../shard/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppxComponent } from './appx.component';

const routes: Routes = [
    { path: '', component: AppxComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppxRoutingModule { }
