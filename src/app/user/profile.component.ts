import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html'
  ,styles: [`
      em { float: right; color: #e05c65; padding-left: 10px; }
      .error input { background-color: #e3c3c5; }
      .error input::placeholder{ color: #6e6e6e; }
    `]
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(private authService:AuthService, private router:Router){

  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
  
  saveProfile(formValues) {
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }
  
  cansel() {
    this.router.navigate(['events']);
  }

}