import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';
import { SharedModule } from '../shared/shared.module';
import { RunnerFormComponent } from './runner-form/runner-form.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AddAnotherRunnerComponent } from './add-another-runner/add-another-runner.component';
import { CardinfoComponent } from './cardinfo/cardinfo.component';
import { BasicInfoComponent } from './runner-form/basic-info/basic-info.component';
import { AddressComponent } from './runner-form/address/address.component';
import { AdditionalInfoComponent } from './runner-form/additional-info/additional-info.component';
import { RaceQuestionsComponent } from './runner-form/race-questions/race-questions.component';
import { DonateComponent } from './runner-form/donate/donate.component';
import { BillingInfoComponent } from './cardinfo/billing-info/billing-info.component';
import { PaymentInfoComponent } from './cardinfo/payment-info/payment-info.component';
import { SaveDataComponent } from './runner-form/save-data/save-data.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrationComponent, RunnerFormComponent, OrderSummaryComponent, AddAnotherRunnerComponent, CardinfoComponent, BasicInfoComponent, AddressComponent, AdditionalInfoComponent, RaceQuestionsComponent, DonateComponent, BillingInfoComponent, PaymentInfoComponent, SaveDataComponent],
  exports: [
    RegistrationComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistrationModule { }
