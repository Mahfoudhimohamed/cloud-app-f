import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.scss']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route:ActivatedRoute, private quizService:QuizService, private categoryService:CategoryService, private router:Router) { }
  id:any;
  quiz:any;
  categories:any;
  ngOnInit(): void {
   this.id= this.route.snapshot.params['id'];
   
   this.quizService.getQuiz(this.id).subscribe((data)=>{
     this.quiz =data;
     console.log(data)
   },
   (error)=>{
     console.log(error)
   });
   this.categoryService.categories().subscribe((data)=>{
     this.categories=data

   },
   (error)=>{
     console.log(error)
   })
  }


  //update 

  public updataData(){
    this.quizService.updateQuiz(this.id,this.quiz).subscribe((data)=>{
      console.log("update data")
      console.log(data)
    Swal.fire('Success','Quiz updated ','success').then((e)=>{
      this.router.navigate(['quizzes'])

    })
    },(error)=>{
      Swal.fire('Error','Error in updating quiz', 'error')
      console.log(error)
    })
  }


}
