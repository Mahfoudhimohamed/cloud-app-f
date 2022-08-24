import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class TrainerGuard implements CanActivate {
  constructor(private login:LoginService, private router:Router){}
  session:any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      let data:any = this.login.getDataUser();
      this.session = JSON.parse(data)
      let role =this.session.roles[0].roleName;
      console.log(role);
   
      if(this.login.isLoggedIn() && role == "Trainer"){
      return true;
    }
    
    this.router.navigate(['login'])
     return false;

      //return true;
  }
  
}
