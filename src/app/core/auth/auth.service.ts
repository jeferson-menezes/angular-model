import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
import { UserService } from '../user/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private userService: UserService) { }

  authenticate(login: string, password: string) {

    return this.http.post('http://localhost:8080/', { login, password })
      .pipe(tap((res: any) => {
        const authToken = res.headers.get('x-access-token')
        this.userService.setToken(authToken)
      }))
  }
}
