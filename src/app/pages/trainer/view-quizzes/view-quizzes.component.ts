import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.scss']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes = null;
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.quizzes().subscribe((data:any)=>{
      this.quizzes=data;
      console.log(this.quizzes);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error','Error in loading data','error')
    })
  }

  deleteQuiz(id:any){
/*this.quizService.deletQuiz(id).subscribe((data)=>{
  Swal.fire('Success','Quiz deleted','success')
},(error)=>{
  console.log(error)
  Swal.fire('Error','Error in deleting Quiz','error')
})*/
Swal.fire({
  icon:'info',
  title:'Are you sure ?',
  confirmButtonText:'Delete',
  showCancelButton:true,
}).then((result)=>{
  if(result.isConfirmed){
    this.quizService.deletQuiz(id).subscribe((data)=>{
      Swal.fire('Success','Quiz deleted','success')
    },(error)=>{
      console.log(error)
      Swal.fire('Error','Error in deleting Quiz','error')
    })
  }
})

  }

}
