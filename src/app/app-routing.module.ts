import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './core/home/home.component';
import { EventsComponent } from './events/events.component';
import { ResultsComponent } from './results/results.component';
import { CharitiesComponent } from './charities/charities.component'
import { RegistrationComponent } from './registration/registration.component'



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'charites', component: CharitiesComponent},
  {path: 'registration', component: RegistrationComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
