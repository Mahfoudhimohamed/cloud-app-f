import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser: any;
  constructor(
    private http: HttpClient
  ) { }


  //add user

  public addUser(user:any){

    return this.http.post(`${environment.apiUrl}user/register`,user);

  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}user`);
  }
  getAllTrainers() {
    return this.http.get<User[]>(`${environment.apiUrl}user/trainers`);
  }
  getAllUsers() {
    return this.http.get<User[]>(`${environment.apiUrl}user/users`);
  }

getByUsername(username: string) {

    return this.http.get<User>(`${environment.apiUrl}user/${username}`)
}

getUser(id:number){
  return this.http.get<User>(`${environment.apiUrl}user/${id}`)
}

updateUser(id:any, user:any){
  return this.http.put(`${environment.apiUrl}user/${id}`,user)
}



}
