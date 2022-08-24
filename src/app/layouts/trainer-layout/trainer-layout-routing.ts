import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { AddCategoryComponent } from "src/app/pages/trainer/add-category/add-category.component";
import { AddQuestionComponent } from "src/app/pages/trainer/add-question/add-question.component";
import { AddQuizComponent } from "src/app/pages/trainer/add-quiz/add-quiz.component";
import { SessionComponent } from "src/app/pages/trainer/session/session.component";
import { TrainerDashboardComponent } from "src/app/pages/trainer/trainer-dashboard/trainer-dashboard.component";
import { TrainerProfileComponent } from "src/app/pages/trainer/trainer-profile/trainer-profile.component";
import { UpdateQuizComponent } from "src/app/pages/trainer/update-quiz/update-quiz.component";
import { ViewCategoryComponent } from "src/app/pages/trainer/view-category/view-category.component";
import { ViewQuestionComponent } from "src/app/pages/trainer/view-question/view-question.component";
import { ViewQuizzesComponent } from "src/app/pages/trainer/view-quizzes/view-quizzes.component";

export const TrainerLayoutRoutes: Routes = [
   { path: 'trainer-dashboard', component:TrainerDashboardComponent},
   {path: 'trainer-profile', component:TrainerProfileComponent},
   { path: 'categories', component:ViewCategoryComponent},
   {path:'add-category', component:AddCategoryComponent},
   {path: 'quizzes', component:ViewQuizzesComponent},
   { path:'add-quiz', component:AddQuizComponent},
   {path:'quiz/:id', component:UpdateQuizComponent},
   {path: 'view-questions/:id/:title', component:ViewQuestionComponent},
   {path: 'add-question/:qid/:title', component:AddQuestionComponent},
   {path:'session', component:SessionComponent}
];