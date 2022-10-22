import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LiveDashboardRoutingModule } from './live-dashboard-routing.module';
import { LiveDashboardComponent } from './live-dashboard.component';


@NgModule({
  declarations: [
    LiveDashboardComponent,
  ],
  imports: [
    CommonModule,
    LiveDashboardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
  ]
})
export class LiveDashboardModule { }
