import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  // @ViewChild('')
  userNameInput: ElementRef<HTMLInputElement>;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: ToastService,
    private plantformDetectorService: PlatformDetectorService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(): void {

    this.loading = true

    const userName = this.loginForm.get('userName').value
    const password = this.loginForm.get('password').value

    this.authService.authenticate(userName, password)
      .subscribe(() => {
        this.router.navigate(['home'])
      },
        err => {
          this.toast.error('Houve um erro para logar', 3000)
          this.loginForm.reset();
          this.plantformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus()
        }
      )

    this.loading = false
  }


}
