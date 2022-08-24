import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  id:any;
  user:any=null;
  profile:any=null;
session:any;
  constructor(private login:LoginService , private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    let data:any = this.login.getDataUser();
    this.session = JSON.parse(data)
    this.user=this.session;
    this.id=this.user.id;
    console.log("uesr")
    console.log(this.user)
    this.userService.getUser(this.id).subscribe((data)=>{
      this.profile =data;
      console.log("user profile")
      console.log(this.profile)
    },
    (error)=>{
      console.log(error)
    });
    console.log(this.user)
  }



  //update User

  updateUser(){
    this.userService.updateUser(this.id,this.profile).subscribe((data)=>{
      console.log("update data")
      console.log(data)
    Swal.fire('Success','User updated ','success').then((e)=>{
      this.router.navigate(['student-profile'])

    })
    },(error)=>{
      Swal.fire('Error','Error in updating user', 'error')
      console.log(error)
    })
  }
}
