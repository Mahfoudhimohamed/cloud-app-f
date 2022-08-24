import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES_ADMIN,ROUTES_TRAINER } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  session:any;
  constructor(location: Location,  private element: ElementRef, public login : LoginService, private router: Router) {
    this.location = location;
  }
  
  isLoggedIn =false;
  user:any =null;

  ngOnInit() {
    this.listTitles = ROUTES_ADMIN.filter(listTitle => listTitle);
    let data:any = this.login.getDataUser();
   this.session = JSON.parse(data)
   console.log(this.session.username)
   this.isLoggedIn =this.login.isLoggedIn();
   this.user= this.session
   this.login.loginStatusSubject.asObservable().subscribe((data) =>{
     this.isLoggedIn =this.login.isLoggedIn();
     this.user= this.session
   })

  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  logout(){
    
    this.login.logout();
    //
    //window.location.reload();
    this.login.loginStatusSubject.next(false)
    this.router.navigate(['login'])
  }

}
