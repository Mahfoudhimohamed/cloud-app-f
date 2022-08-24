import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

constructor(private http:HttpClient) { }

 public generateToken(loginData:any){
    return this.http.post(`${environment.apiUrl}user/login`,loginData)
  }



   //token in localstorge
   public loginUser(token:any){
    localStorage.setItem('token',token);
   
    return true;
  }


  //check user if login or not

  public isLoggedIn(){
    let tokenStr = localStorage.getItem("token")
    if(tokenStr== undefined || tokenStr =='' || tokenStr ==null){
      return false;
    }else{
      return true;
    }
  }

    //logout

   public logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return true;
    }


    //get token

    public getToken(){
      return localStorage.getItem('token');

    }
    
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${environment.apiUrl}user/${id}`;
    return this.http.get(api).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

//set User Detail
public setUser(user:any){
  localStorage.setItem('user', JSON.stringify(user));
}
public getDataUser(){
  let data = localStorage.getItem('user')
  return data;
}



    //getUser
    public getUser(username:string){
      let userStr = localStorage.getItem("user");
      let api = `${environment.apiUrl}user/${username}`;
    return this.http.get(api).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
    }


    //get user role
    public getUserRole(){

      //let user = this.getUser()
      //return user.roles[0].roleName;

    }


    // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }




}