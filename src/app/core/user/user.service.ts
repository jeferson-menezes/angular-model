import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify()
  }

  setToken(token: string): void {
    this.tokenService.setToken(token)
    this.decodeAndNotify();
  }

  decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user)
  }

  getUser() {
    return this.userSubject.asObservable()
  }

  logout(){
    this.tokenService.removerToken()
    this.userSubject.next(null)
  }

  isLogged(){
    return this.tokenService.hasToken()
  }
}
