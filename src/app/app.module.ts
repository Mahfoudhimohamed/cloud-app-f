import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { TrainerLayoutComponent } from './layouts/trainer-layout/trainer-layout.component';
import {ToastrModule} from 'ngx-toastr';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { StudentProfileComponent } from './pages/student/student-profile/student-profile.component';
import { DisplayQuizzesComponent } from './pages/student/display-quizzes/display-quizzes.component';
import { QuizdetailComponent } from './pages/student/quizdetail/quizdetail.component';
import { StartComponent } from './pages/student/start/start.component';

import { TrainerProfileComponent } from './pages/trainer/trainer-profile/trainer-profile.component';
import { ViewCategoryComponent } from './pages/trainer/view-category/view-category.component';
import { AddCategoryComponent } from './pages/trainer/add-category/add-category.component';
import { AddQuizComponent } from './pages/trainer/add-quiz/add-quiz.component';
import { ViewQuizzesComponent } from './pages/trainer/view-quizzes/view-quizzes.component';
import { UpdateQuizComponent } from './pages/trainer/update-quiz/update-quiz.component';
import { AddQuestionComponent } from './pages/trainer/add-question/add-question.component';
import { ViewQuestionComponent } from './pages/trainer/view-question/view-question.component';
import { SessionComponent } from './pages/trainer/session/session.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
   // NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      preventDuplicates:true
    }),
   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    TrainerLayoutComponent,
    StudentLayoutComponent,
    StudentProfileComponent,
    DisplayQuizzesComponent,
    QuizdetailComponent,
    StartComponent,
    TrainerProfileComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    AddQuizComponent,
    ViewQuizzesComponent,
    UpdateQuizComponent,
    AddQuestionComponent,
    ViewQuestionComponent,
    SessionComponent,
   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
