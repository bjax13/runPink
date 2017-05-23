import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { SharedModule } from '../shared/shared.module';
import { InfoComponent } from './info/info.component';
import { WhyRunComponent } from './why-run/why-run.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CourseMapComponent } from './course-map/course-map.component';
import { PricingComponent } from './pricing/pricing.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [EventsComponent, InfoComponent, WhyRunComponent, EventDetailsComponent, CourseMapComponent, PricingComponent],
  exports: [EventsComponent]
})
export class EventsModule { }
