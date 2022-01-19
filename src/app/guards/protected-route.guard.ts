import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../features/login/service/login.service';
@Injectable({
  providedIn: 'root'
})
export class ProtectedRouteGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const userInfo = this.loginService.getUserInfo();

    if (userInfo.role!=='user') {
      this.router.navigate(['login']);
    }
    console.log(userInfo)

    return true;
  }

}
