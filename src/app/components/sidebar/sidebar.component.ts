import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES_ADMIN: RouteInfo[] = [
    { path: '/admin-dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

export const ROUTES_TRAINER: RouteInfo[] = [
  { path: '/trainer-dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/trainer-profile', title: 'Trainer Profile',  icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/categories', title: 'Categories',  icon: 'ni-folder-17 text-red', class: '' },
  { path:'/add-category', title:'Add Category', icon:'ni-fat-add text-pink', class:''},
  {path:'/quizzes', title:'Quizzes', icon:'ni-archive-2 text-primary', class:''},
  {path:'/add-quiz', title:'Add Quiz', icon:'ni-fat-add text-success', class:''}
];
export const ROUTES_USER: RouteInfo[] = [
  { path: '/student-dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/student-profile', title: 'Student profile',  icon:'ni-single-02 text-yellow', class: '' },
 { path: '/display-quizzes/0', title: 'All Quiz',  icon:' ni-paper-diploma text-pink', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  session:any;
  constructor(private router: Router,public login : LoginService) { }
  isLoggedIn =false;
  user:any =null;
  ngOnInit() {
    

   let data:any = this.login.getDataUser();
   this.session = JSON.parse(data)
   console.log(this.session.username)
   this.isLoggedIn =this.login.isLoggedIn();
   this.user= this.session
   this.login.loginStatusSubject.asObservable().subscribe((data) =>{
     this.isLoggedIn =this.login.isLoggedIn();
     this.user= this.session
   })
   if(this.user.roles[0].roleName =="Admin"){
   this.menuItems = ROUTES_ADMIN.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }else if(this.user.roles[0].roleName =="Trainer"){
    this.menuItems = ROUTES_TRAINER.filter(menuItem => menuItem);
     this.router.events.subscribe((event) => {
       this.isCollapsed = true;
    });
  }else if(this.user.roles[0].roleName =="User"){
    this.menuItems = ROUTES_USER.filter(menuItem => menuItem);
     this.router.events.subscribe((event) => {
       this.isCollapsed = true;
    });
  }
  }


  logout(){
    
    this.login.logout();
    //
    //window.location.reload();
    this.login.loginStatusSubject.next(false)
    this.router.navigate(['login'])
  }
}
