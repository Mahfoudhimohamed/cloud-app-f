import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-display-quizzes',
  templateUrl: './display-quizzes.component.html',
  styleUrls: ['./display-quizzes.component.scss']
})
export class DisplayQuizzesComponent implements OnInit {

  catId:any;
  quizzes:any;
  notdata:any=null
    constructor(private route:ActivatedRoute, private quizService:QuizService) { }
    hidden = false;
  
    toggleBadgeVisibility() {
      this.hidden = !this.hidden;
    }
    ngOnInit(): void {
  
      this.route.params.subscribe((params)=>{
        this.catId = params['catId']
      
        if(this.catId ==0){
          console.log("dispaly all quiz")
          this.quizService.activeQuizzes().subscribe((data)=>{
          this.quizzes =data;
          console.log(this.quizzes)
          },
          (error)=>{
            console.log(error)
          })
        }else{
          console.log(this.catId)
          //console.log("dispaly with specific id")
          
          this.quizService.getActiveQuizCategory(this.catId).subscribe(
            (data:any)=>{
              if(data== null){
                this.quizzes = data;
                console.log(this.notdata)
              }else{
              this.quizzes = [data];
              console.log(this.quizzes)
            }
            },
            (error)=>{
              console.log('error in dispaly specifiq quiz data')
            }
          )
          
        }
      
      
      
      
      
      })
     
  
     
  
    
    }
  
  

}
