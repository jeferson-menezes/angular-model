import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'core-menu',
  styleUrls: ['menu.component.less'],
  templateUrl: '/menu.component.html'
})
export class MenuComponent {

  isCollapsed = false;
  user$: Observable<User>;
  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user);
  }

  logout() {
    this.userService.logout()
    this.router.navigate([''])
  }
}
