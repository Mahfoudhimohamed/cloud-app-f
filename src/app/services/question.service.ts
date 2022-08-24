import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuestionQuiz(qid:any){
    return this.http.get(`${environment.apiUrl}question/${qid}`)
  }

  public getQuestionQuizForTest(qid:any){
    return this.http.get(`${environment.apiUrl}question/quiz/${qid}`)
  }

  //add question
  public addQuestion (question:any){
    return this.http.post(`${environment.apiUrl}question/`, question)
  }

  public deleteQuestion(qid:any){
    return this.http.delete(`${environment.apiUrl}question/${qid}`)
  }
}
