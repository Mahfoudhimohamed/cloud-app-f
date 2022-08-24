import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.scss']
})
export class TrainerDashboardComponent implements OnInit {
  public copy: string;
  users=null;
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe((data:any)=>{
      this.users = data
      console.log(this.users)
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error!!','Error in loading data', 'error')
  
    })
  }

}
