import { Component } from "@angular/core";

import { AuthService } from "../user/auth.service";

@Component({
    selector: 'nav-bar'
    ,templateUrl: './navbar.component.html'
    ,styles:[`
            .nav.navbar-nav { font-size: 15px; }
            .active { color: #f97924 !important;}
            #serachForm { margin-right: 100px; }
            @media (max-width: 1200px) { #searchForm { display: none }}
    `]

})
export class NavBarComponent {
    constructor(private auth: AuthService){
        
    }
} 