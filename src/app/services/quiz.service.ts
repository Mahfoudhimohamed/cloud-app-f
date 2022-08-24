import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public quizzes(){
    return this.http.get(`${environment.apiUrl}quiz`)
  }

  public activeQuizzes(){
    return this.http.get(`${environment.apiUrl}quiz/active`)
  }

  public addQuiz(quiz:any){
    return this.http.post(`${environment.apiUrl}quiz`, quiz)
  }

  public deletQuiz(id:any){
    return this.http.delete(`${environment.apiUrl}quiz/${id}`)
  }

  public getQuiz(id:any){
    //console.log("service")
    return this.http.get(`${environment.apiUrl}quiz/${id}`)
  }

  public getQuestionQuiz(qid:any){
    //console.log("service")
    console.log(this.http.get(`${environment.apiUrl}quiz/question/${qid}`))
    return this.http.get(`${environment.apiUrl}quiz/question/${qid}`)
  }


  public getQuizzesOfCategory(cid:any){
    console.log("quizCategory")
    return this.http.get(`${environment.apiUrl}quiz/category/${cid}`)
  }

  public getActiveQuizCategory(cid:any){
    return this.http.get(`${environment.apiUrl}quiz/category/active/${cid}`)
  }
  public updateQuiz(id:any,quiz:any){
    return this.http.put(`${environment.apiUrl}quiz/${id}`,quiz)

  }

}
