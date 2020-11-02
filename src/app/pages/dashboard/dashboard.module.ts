import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module'
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent}])
  ]
})
export class DashboardModule { }
