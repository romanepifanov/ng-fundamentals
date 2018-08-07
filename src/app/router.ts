import { Routes } from "@angular/router";

import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";
import { CreateEventComponent } from "./events/create-event.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventsListResolver } from "./events/events-list-resolver.service";
import { CreateSessionComponent } from "./events/event-details";
import { Error404Component } from "./errors/404.component";

export const appRoutes:Routes = [ 
    { path: 'events/new', component: CreateEventComponent}
    ,{ path: 'events', component: EventsListComponent, resolve: { events:EventsListResolver } }
    ,{ path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] }
    ,{ path: 'events/session/new', component: CreateSessionComponent }
    ,{ path: '404', component: Error404Component }
    ,{ path: '', redirectTo: '/events', pathMatch:  'full' }
    ,{ path: 'user', loadChildren: './user/user.module#UserModule' }
]