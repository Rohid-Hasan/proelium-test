import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveDashboardComponent } from './live-dashboard.component';

const routes: Routes = [{ path: '', component: LiveDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveDashboardRoutingModule { }
