import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    password: any;
    userName: any;

    constructor(private authService: AuthService, private router:Router){

    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }

    cansel(){
        this.router.navigate(['events'])
    }
}