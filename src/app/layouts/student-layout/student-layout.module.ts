import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentLayoutRoutes } from './student-layout.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { StudentDashboardComponent } from 'src/app/pages/student/student-dashboard/student-dashboard.component';


@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(StudentLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [StudentDashboardComponent],
})
export class StudentLayoutModule { }
