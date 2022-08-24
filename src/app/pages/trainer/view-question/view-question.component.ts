import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {

  qId:any;
  qTitle:any;
   questions: any[]=[];
  //const resultArray=[];
  constructor(private route:ActivatedRoute, private questionService:QuestionService,private quizService:QuizService,  private toastr : ToastrService ) { }

  ngOnInit(): void {
  this.qId=this.route.snapshot.params['id'];
  this.qTitle = this.route.snapshot.params['title'];
  this.quizService.getQuestionQuiz(this.qId).subscribe((data: any)=>{
   // console.log(data);
    this.questions = data.questions;

//this.questions.push(arr)
//console.log(this.qId)
//console.log(this.questions)
console.log("data==>", data)
    

  },
  (error)=>{
    console.log(error)
    //Swal.fire('Error','Error')
  })
 
  //alert(this.qId)
  //alert(this.qTitle)

  }

  deleteQuestion(qId:any){
  //alert(qId);
  Swal.fire({
    icon:'info',
    showCancelButton:true,
    confirmButtonText:'Delete',
    title:'Are you sure, want to delete this question '
    
  }).then((result)=>{
    if(result.isConfirmed){
      this.questionService.deleteQuestion(qId).subscribe((data)=>{
        //Swal.fire('Success','Quiz deleted','success')
        this.toastr.success('Question Deleted', '', {
          timeOut:3000
        });
        this.questions = this.questions.filter((q)=> q.id != qId)
      },(error)=>{
        console.log(error)
        Swal.fire('Error','Error in deleting Question','error')
      })
    }
  })
  }

}
