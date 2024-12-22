import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null{
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get confirmPasswordError(): string {
    const confirmPassword = this.confirmPassword;
    const formErrors = this.registerForm.errors;

    if (formErrors?.['passwordMismatch'] && confirmPassword?.touched) {
      return "Password doesn't match";
    } else if (
      confirmPassword?.touched &&
      confirmPassword.errors?.['required']
    ) {
      return 'Confirm Password is required';
    }
    return '';
  }

  onRegister() {
    if (this.registerForm.valid) {
      const newUser = {
        email: this.email?.value,
        password: this.password?.value,
      };

      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      alert('Registration successful!');
      this.registerForm.reset();
    }
  }
}
