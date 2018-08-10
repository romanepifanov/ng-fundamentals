import { Component } from "@angular/core";

import { AuthService } from "../user/auth.service";
import { ISession, EventService } from "../events/shared";
import { $ } from "../../../node_modules/protractor";

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
  foundSessions: ISession[];

  constructor(
    private auth: AuthService,
    private eventService: EventService
  ) {}

  searchSessions(searchThrm) {
    this.eventService.searchSessions(searchThrm).subscribe( sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    })
  }
} 