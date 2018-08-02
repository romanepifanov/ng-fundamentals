import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "./auth.service";


@Component({
    templateUrl: './login.component.html'
    ,styles: [`
        em { float: right; color: #e05c65; padding-left: 10px; }
    `]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    private userName: FormControl;
    private password: FormControl;
    mouseoverLogin: boolean;

    constructor(private authService: AuthService, private router:Router){

    }

    ngOnInit() {
        this.userName = new FormControl( '', Validators.required );
        this.password = new FormControl( '', Validators.required );

        this.loginForm = new FormGroup ({
            userName: this.userName,
            password: this.password
        })
    }
    
    validateUserName() {
        return this.userName.untouched;
    }

    validatePassword() {
       return this.password.untouched;
    }
    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }

    cansel(){
        this.router.navigate(['events'])
    }
}