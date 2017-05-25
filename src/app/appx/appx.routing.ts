import { AppComponent } from './app.component';
import { AuthGuard } from '../shard/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppxComponent } from './appx.component';

const routes: Routes = [
    { path: 'appx', loadChildren: './appx.module#AppxModule', canActivate: [AuthGuard]},
    { path: '', component: AppxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppxRoutingModule { }
