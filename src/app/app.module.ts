import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { EventsModule } from './events/events.module'
import { SharedModule } from './shared/shared.module';
import { RegistrationModule } from './registration/registration.module';


import { ResultsComponent } from './results/results.component';
import { CharitiesComponent } from './charities/charities.component';
import { YearComponent } from './results/year/year.component';
import { RaceResultCardComponent } from './results/year/race-result-card/race-result-card.component';
import { CurrentComponent } from './charities/current/current.component';


@NgModule({
  declarations: [
    AppComponent,

    ResultsComponent,
    CharitiesComponent,
    YearComponent,
    RaceResultCardComponent,
    CurrentComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    EventsModule,
    RegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
