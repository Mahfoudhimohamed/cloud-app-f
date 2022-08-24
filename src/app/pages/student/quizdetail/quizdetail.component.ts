import { Component, OnInit } from '@angular/core';
import {  } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-quizdetail',
  templateUrl: './quizdetail.component.html',
  styleUrls: ['./quizdetail.component.scss']
})
export class QuizdetailComponent implements OnInit {

  qid:any;
quiz:any
  constructor(
    private route:ActivatedRoute , private quizService:QuizService, private router:Router
  ) { }

  ngOnInit(): void {
    this.qid =  this.route.snapshot.params['qid']
    console.log(this.qid)
    this.quizService.getQuiz(this.qid).subscribe((data)=>{
      console.log(data)
      this.quiz = data

    },
    (error)=>{
      console.log(error)
    })
  }



  startQuiz(){
    Swal.fire({
      title: 'Do you want to start the quiz?',
    
      showCancelButton: true,
      confirmButtonText: 'Start',
      icon:'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       this.router.navigate(['start/'+this.qid])



      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }


}
