import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  loginDisabled: boolean = true;

  constructor(private fb: FormBuilder, private router: Router,private loggingservice:LoggingService ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.checkCredentials();
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  checkCredentials() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    const validUser = users.find(
      (user: any) => user.email === email && user.password === password
    );

    this.loginDisabled = !validUser;
  }

  val:boolean=false;
  onLogin() {
    if (!this.loginDisabled) {
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate([''],{
       queryParams:{checker:this.val} 
      });
    }
  }
}
