import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { getCookie } from '../shared/helpers/cookie';

@Component({
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(20)],
    ],
  });
  emailControl = this.loginForm.controls.email;
  passwordControl = this.loginForm.controls.password;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
    console.log(cookieService.get('Authorization'));
  }

  switchLoadEffect(): void {
    const loginText = document.querySelector('.login-text');
    const loadingDots = document.querySelector('.loading-dots');
    if (!loginText?.classList.contains('hide')) {
      loginText?.classList.add('hide');
      loadingDots?.classList.remove('hide');
    } else {
      loginText?.classList.remove('hide');
      loadingDots?.classList.add('hide');
    }
  }

  invalidEffect(field: string, error: string): void {
    const form = document.querySelector(`#form-${field}`);
    const formMessage = document.querySelector(`#form-${field}-error`);
    form?.classList.add('form-group-invalid');
    formMessage!.innerHTML = `- ${error}`;
    formMessage?.classList.remove('hide');
  }

  onSubmit(): void {
    if (this.loginForm.valid && this.loginForm.dirty) {
      this.switchLoadEffect();
      console.log(this.loginForm.value);
      this.httpClient.post('/api/v1/login', this.loginForm.value).subscribe({
        next: () => {
          this.router.navigate(['']);
          this.switchLoadEffect();
        },
        error: (err) => {
          console.log(err);
          if (err.status == 401) {
            if (err.error.error.toLowerCase().indexOf('email') > -1) {
              this.invalidEffect('email', err.error.error);
            } else if (err.error.error.toLowerCase().indexOf('password') > -1) {
              this.invalidEffect('password', err.error.error);
            }
          }
          this.switchLoadEffect();
        },
      });
    } else {
      this.validateLoginForm();
    }
  }

  validateLoginForm(): void {
    if (this.emailControl.invalid) {
      if (this.emailControl.errors?.required) {
        this.invalidEffect('email', 'email is required');
      } else {
        this.invalidEffect('email', 'this email is invalid');
      }
    } else if (this.passwordControl.invalid) {
      if (this.passwordControl.errors?.required) {
        this.invalidEffect('password', 'password is required');
      } else if (
        !this.passwordControl.errors?.minLength ||
        !this.passwordControl.errors?.maxLength
      ) {
        this.invalidEffect('password', 'must be between 4 and 24');
      }
    }
  }
}
