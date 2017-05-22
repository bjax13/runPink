import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { EventsComponent } from './events/events.component';
import { ResultsComponent } from './results/results.component';
import { CharitiesComponent } from './charities/charities.component';
import { SharedModule } from './shared/shared.module';
import { YearComponent } from './results/year/year.component';
import { RaceResultCardComponent } from './results/year/race-result-card/race-result-card.component';
import { CurrentComponent } from './charities/current/current.component'

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    ResultsComponent,
    CharitiesComponent,
    YearComponent,
    RaceResultCardComponent,
    CurrentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
