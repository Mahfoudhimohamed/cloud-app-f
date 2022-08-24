import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerLayoutRoutes } from './trainer-layout-routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { TrainerDashboardComponent } from 'src/app/pages/trainer/trainer-dashboard/trainer-dashboard.component';



@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(TrainerLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [TrainerDashboardComponent]
})
export class TrainerLayoutModule { }
