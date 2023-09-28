import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@core/services/alert.service';
import { AuthService } from '@core/services/authService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginForm: FormGroup;
  isLoading: boolean = false; 

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService, 
    private router: Router)  {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required], 
      password: ['', Validators.required], 
    });
  }

  submitForm() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false; 
      if (this.loginForm.valid) {
        this.authService.createUser(this.loginForm.get('user')?.value, this.loginForm.get('password')?.value)
        this.router.navigate(['/login'])
      } else {
        this.markFormGroupTouched(this.loginForm);
      }
    }, 3000);
  }
  
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }else {
        control.markAsTouched();
      }
    });
  }

}
