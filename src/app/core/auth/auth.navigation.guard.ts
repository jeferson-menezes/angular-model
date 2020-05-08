import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthNavigationGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, RouterStateSnapshot): boolean | UrlTree | import("rxjs").Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (!this.userService.isLogged) {
      this.router.navigate([''])
      return false;
    }
    return true;
  }


}
