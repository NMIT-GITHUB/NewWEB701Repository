import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NgForm, FormControl, FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    type: new FormControl(''),
  });
  isSubmit = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm): void {
    this.isSubmit = true;
    if (data.valid)
    {
      this.authService.register(data.controls['username'].value, data.controls['email'].value, data.controls['password'].value, data.controls['address'].value, data.controls['phone'].value, data.controls['type'].value).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
      window.scroll(0,0);
    }
    else
    {
      console.log(data.controls['password'].errors);
    }
    
  }
}
