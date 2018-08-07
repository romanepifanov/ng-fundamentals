import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router'

import { EventService } from "../shared/event.service";
import { IEvent, ISession } from "../shared/index";

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
            .container { paddinf: 0 20px;}
            .event-image { height: 100px;}
            a { cursor: pointer }
        `]
})
export class EventDetailsComponent {
  addMode: Boolean = false;
  event: IEvent;

  constructor(private eventService:EventService, private route:ActivatedRoute) {
      
  }
  ngOnInit() {
      this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSessions() {
    this.addMode = true;
  }

  canselAddSession(){
    this.addMode = false;
  }

  saveNewSession(session:ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
}