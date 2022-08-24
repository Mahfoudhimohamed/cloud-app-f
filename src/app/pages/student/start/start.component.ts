import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute, private quizService:QuizService) { }
  qid:any;
  questions:any;
  marksGot =0;
  correctAnswers = 0;
  essayed = 0;
  isSubmit =false;
  resultQuiz:any;
  nbQuestion = 0
  timer:any;
  ngOnInit(): void {
   this.back();

   this.qid = this.route.snapshot.params['qid']
   console.log(this.qid)
   this.displayQuestions();
  }
  displayQuestions() {
    this.quizService.getQuestionQuiz(this.qid).subscribe((data:any)=>{
      if(data != null){
        this.questions = data;
        this.timer = this.questions.questions.length * 2 * 60;
        this.questions.questions.forEach((elem:any) => {
          elem['givenAnswer'] = ''
        });
        console.log(this.questions)
        this.startTimer();
      }
      
      else this.questions = null

    },(error)=>{
      console.log(error)
      Swal.fire('Error','Error in loading questions of quiz','error')
    })
  }
  back(): void {
    /* this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      console.log('prev:', event.url);
      this.previousUrl = event.url;
    }); */
  }
  

  submitQuiz(){
    Swal.fire({
      title: 'Do you want to submit the quiz?',
    
      showCancelButton: true,
      confirmButtonText: 'Submitt',
      icon:'info'
    }).then((result) => {
     
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        this.evalQuiz();
       
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  evalQuiz(){
    this.isSubmit=true
    this.nbQuestion = this.questions.questions.length
    this.questions.questions.forEach((q:any) => {
       if(q.givenAnswer == q.answer){
         this.correctAnswers= this.correctAnswers+1
        let marksOfQ = this.questions.maxMarks/ this.nbQuestion
         this.marksGot +=marksOfQ 
       
         
      }
      if(q.givenAnswer.trim() !=''){
       this.essayed++;
     } 
        console.log("Correct Answers"+ this.correctAnswers)
         console.log("Marks got "+ this.marksGot) 
         console.log(this.essayed)
        
     });
  }

  startTimer(){
   let t:any= window.setInterval(()=>{
      if(this.timer<=0){
        this.evalQuiz()
        clearInterval(t)

      }else{
        this.timer--;
      }
    },1000)
  }

  formattedTime(){
    let mm = Math.floor(this.timer/60);
    let ss= this.timer - mm * 60
    return `${mm} min:${ss} sec`
  }

}
