import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  qId:any;
  qTitle:any;
  question:any={
    quiz:{},
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }
  constructor(private route:ActivatedRoute , private questionService:QuestionService) { }

  ngOnInit(): void {
    this.qId= this.route.snapshot.params['qid'];
    this.qTitle= this.route.snapshot.params['title'];
    console.log(this.qId)
    console.log(this.qTitle)
    this.question.quiz['id'] = this.qId
  }

  formSubmit(){
    //alert('testing')
    if(this.question.content.trim() =='' || this.question.content == null ) {
      return;
    }
    if(this.question.option1.trim() =='' || this.question.option1 == null ) {
      return;
    }
    if(this.question.option2.trim() =='' || this.question.option2 == null ) {
      return;
    }

    if(this.question.answer.trim() =='' || this.question.answer == null ) {
      return;
    }
   

    this.questionService.addQuestion(this.question).subscribe((data:any)=>{
      console.log(data)
      Swal.fire("Success",'Question Added','success')
      this.question.content=''
      this.question.option1=''
      this.question.option2=''
      this.question.option3=''
      this.question.option4=''
      this.question.answer=''
    },
    (error)=>{
      console.log(error)
      Swal.fire('Error','Error in adding question', 'error')
    })

  }

}
