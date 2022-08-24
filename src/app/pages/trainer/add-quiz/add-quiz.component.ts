import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {

  categories= null;
  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestion:'',
    active:true,
    category:{
      id:''
    }


  }
  constructor(private categoryService:CategoryService, private toastr : ToastrService , private quizService:QuizService) { }

  ngOnInit(): void {
    this.categoryService.categories().subscribe((data:any)=>{
      this.categories = data;
      console.log(this.categories)

    },
    (error)=>{
      console.log(error);
      Swal.fire('Error!!','Error in loading data', 'error')
    })
  }


  submitForm(){
    if(this.quizData.title.trim()==''|| this.quizData.title ==null){
    this.toastr.error('Title Required','',{
      timeOut:2000
    });
    return;
    }


    this.quizService.addQuiz(this.quizData).subscribe((data)=>{
     
      Swal.fire("Success",'Quiz is added','success');
      this.quizData={
        title:'',
        description:'',
        maxMarks:'',
        numberOfQuestion:'',
        active:true,
        category:{
          id:''
        }
      }
    },
    (error)=>{
      console.log(error)
      Swal.fire('Error','Error while adding Quiz', 'error')
     
    })
  }


}
