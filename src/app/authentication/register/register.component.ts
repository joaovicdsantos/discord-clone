import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
    password: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(24)],
    ],
  });
  emailControl = this.registerForm.controls.email;
  usernameControl = this.registerForm.controls.username;
  passwordControl = this.registerForm.controls.password;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
    console.log(cookieService.get('Authorization'));
  }

  switchLoadEffect(): void {
    const registerText = document.querySelector('.register-text');
    const loadingDots = document.querySelector('.loading-dots');
    if (!registerText?.classList.contains('hide')) {
      registerText?.classList.add('hide');
      loadingDots?.classList.remove('hide');
    } else {
      registerText?.classList.remove('hide');
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
    if (this.registerForm.valid && this.registerForm.dirty) {
      this.switchLoadEffect();
      this.httpClient.post('/api/v1/register', this.registerForm.value).subscribe({
        next: () => {
          this.router.navigate(['/login']);
          this.switchLoadEffect();
        },
        error: (err) => {
          if (err.status == 401) {
            if (err.error.error.toLowerCase().indexOf('email') > -1) {
              this.invalidEffect('email', err.error.error);
            } else if (err.error.error.toLowerCase().indexOf('password') > -1) {
              this.invalidEffect('password', err.error.error);
            } else if (err.error.error.toLowerCase().indexOf('username') > -1) {
              this.invalidEffect('username', err.error.error);
            }
          }
          this.switchLoadEffect();
        },
      });
    } else {
      this.validateRegisterForm();
    }
  }

  validateRegisterForm(): void {
    if (this.emailControl.invalid) {
      if (this.emailControl.errors?.required) {
        this.invalidEffect('email', 'email is required');
      } else {
        this.invalidEffect('email', 'this email is invalid');
      }
    }
    if (this.passwordControl.invalid) {
      if (this.passwordControl.errors?.required) {
        this.invalidEffect('password', 'password is required');
      } else if (
        !this.passwordControl.errors?.minLength ||
        !this.passwordControl.errors?.maxLength
      ) {
        this.invalidEffect('password', 'must be between 4 and 24');
      }
    }
    if (this.usernameControl.invalid) {
      if (this.usernameControl.errors?.required) {
        this.invalidEffect('username', 'username is required');
      } else if (
        !this.usernameControl.errors?.minLength ||
        !this.usernameControl.errors?.maxLength
      ) {
        this.invalidEffect('username', 'must be between 4 and 24');
      }
    }
  }
}
