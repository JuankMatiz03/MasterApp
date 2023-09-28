import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@core/services/alert.service';
import { AuthService } from '@core/services/authService.service';
import { GeneralServices } from '@core/services/generalServices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  isLoading: boolean = false; 
  countriesRes: any;
  opcionSeleccionada: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private generalService: GeneralServices, 
    private router: Router)  {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required], 
      password: ['', Validators.required], 
    });
  }

  ngOnInit(): void {
    this.generalService.getCountries().subscribe( response => {
      const result = response.filter((item: any) => {
        return item?.name && item?.name?.nativeName && item?.name?.nativeName?.fra && item?.name?.nativeName?.fra?.official !== null;
      });

      this.countriesRes = result
    })
  }

  submitForm() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false; 
      if (this.authService.login(this.loginForm.get('user')?.value, this.loginForm.get('password')?.value)) {
        this.router.navigate(['/home'])
      } else {
        this.markFormGroupTouched(this.loginForm);
        this.alertService.showErrorPassword()
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
