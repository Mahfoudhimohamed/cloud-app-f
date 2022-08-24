import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  session:any
  constructor(private login : LoginService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let data:any = this.login.getDataUser();
      this.session = JSON.parse(data)
      let role =this.session.roles[0].roleName;
      console.log(role);
   
      if(this.login.isLoggedIn() && role == "Admin"){
      return true;
    }
    
    this.router.navigate(['login'])
     return false;
  }
  
}
