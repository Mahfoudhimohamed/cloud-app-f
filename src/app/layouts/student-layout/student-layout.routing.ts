import { Routes } from "@angular/router";
import { DisplayQuizzesComponent } from "src/app/pages/student/display-quizzes/display-quizzes.component";
import { QuizdetailComponent } from "src/app/pages/student/quizdetail/quizdetail.component";
import { StudentDashboardComponent } from "src/app/pages/student/student-dashboard/student-dashboard.component";
import { StudentProfileComponent } from "src/app/pages/student/student-profile/student-profile.component";

export const StudentLayoutRoutes: Routes = [
    { path: 'student-dashboard',component: StudentDashboardComponent },
    { path:'student-profile', component:StudentProfileComponent},
    { path:'display-quizzes/:catId', component:DisplayQuizzesComponent},
    { path :'details/:qid', component:QuizdetailComponent}
   
];