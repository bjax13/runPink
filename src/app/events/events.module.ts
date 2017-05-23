import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [EventsComponent],
  exports: [EventsComponent]
})
export class EventsModule { }
