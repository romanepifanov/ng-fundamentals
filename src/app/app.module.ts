import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQ_TOKEN } from './common/jQuery.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './router';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListResolver } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';
import { CreateSessionComponent } from './events/event-details';
import { SessionsListComponent } from './events/event-details/sessions-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { SimpleModalComponent } from './common/simpleModal.component';
import { ModalTriggerDirective } from './common/modalTrigger.directive';



let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule
    ,FormsModule
    ,ReactiveFormsModule
    ,RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent
    ,EventsListComponent
    ,EventThumbnailComponent
    ,NavBarComponent
    ,EventDetailsComponent
    ,CreateEventComponent
    ,Error404Component
    ,CreateSessionComponent
    ,SessionsListComponent
    ,CollapsibleWellComponent
    ,ModalTriggerDirective
    ,DurationPipe
    ,SimpleModalComponent
  ],
  providers: [
    EventService
    ,{ provide: TOASTR_TOKEN, useValue: toastr}
    ,{ provide: JQ_TOKEN, useValue: jQuery}
    ,EventRouteActivator
    ,EventsListResolver
    ,AuthService
    ,{
      provide: 'canDeactivateCreateEvent'
      ,useValue: 'checkDirtyState'}
  ]
  ,bootstrap: [EventsAppComponent]
})
export class AppModule {

 }
 export function checkDirtyState(component:CreateEventComponent){
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel');
  return true;
}
