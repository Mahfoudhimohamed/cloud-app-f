import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private userService: UserService, private toastr : ToastrService) { }

  public user = {
    username:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    password:''
  }

  ngOnInit(): void {
  }


  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.firstname=='' || this.user.lastname=='' || this.user.email=='' || this.user.phone=='' || this.user.password=='' ){
      //alert('User is required !!')
      this.toastr.error("User is required !", 'Error',{
        timeOut:500,
      });
      return;
    }


    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        console.log(data)
        this.router.navigate(['login']);
        //alert("success")
        //Swal.fire('Success', 'User is registred', 'success')
        this.toastr.success('User is registred','Success',{
          timeOut:1000
        })
      },
      (error)=>{
        //error
        console.log(error)
       this.toastr.error('Somthing went wrong!','',{
         timeOut:1000
       })

      }
    )


  }

}
