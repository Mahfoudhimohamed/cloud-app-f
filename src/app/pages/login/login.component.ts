import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData ={
    username:'',
    password:''
  }



  constructor(private router:Router,private toastr : ToastrService,private login:LoginService) { }

  ngOnInit(): void {
    
  }
  formSubmit(){
console.log("button is clicked")
    if(this.loginData.username.trim() =='' || this.loginData.username ==null){
      /*this.snack.open('Username is required!', '', {
        duration:3000,
      })*/
      this.toastr.error('Username is required!','Error',{
        timeOut:500,
       
      })

      return;
    }


    if(this.loginData.password.trim() =='' || this.loginData.password ==null){
      this.toastr.error('Password is required!', '', {
        timeOut:500
      })

      return;
    }

    //genrate token
    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log('success');
        console.log(data)


        //login
        this.login.loginUser(data.token);


        this.login.getUser(this.loginData.username).subscribe(
          (user:any)=>{
            this.login.setUser(user)
            console.log("set user")
            
            console.log(user.roles[0].roleName)

           if(user.roles[0].roleName =='User'){
             //window.location.href="/student-dashboard"
             this.router.navigate(['student-dashboard'])
             this.login.loginStatusSubject.next(true)

           }else if(user.roles[0].roleName =="Trainer"){
             //window.location.href="/tariner-dashboard"
             this.router.navigate(['trainer-dashboard'])
             this.login.loginStatusSubject.next(true)

           }else if(user.roles[0].roleName =="Admin"){
            // window.location.href="/admin"
            this.router.navigate(['admin-dashboard']);
            this.login.loginStatusSubject.next(true)

           }else if(user.roles[0].roleName =="User"){
            // window.location.href="/admin"
            this.router.navigate(['student-dashboard/0']);
            this.login.loginStatusSubject.next(true)

           }else{
             this.login.logout();
           }
           console.log(this.login.getUserRole())
          });

      },
      (error)=>{
        console.log('error')
        console.log(error)
        this.toastr.error("Invalid Details !! Try again", '', {
          timeOut:1000
        })
      }
    )


  }


 
   
 

}
