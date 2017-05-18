import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DiscountBarComponent } from './header/discount-bar/discount-bar.component';
import { BannerComponent } from './home/banner/banner.component';
import { RegisterComponent } from './home/register/register.component';
import { RunForCauseComponent } from './home/run-for-cause/run-for-cause.component';
import { LiftingHeartsComponent } from './home/lifting-hearts/lifting-hearts.component';
import { SocialComponent } from './home/social/social.component';
import { VideoModalComponent } from './home/run-for-cause/video-modal/video-modal.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DiscountBarComponent,
    BannerComponent,
    RegisterComponent,
    RunForCauseComponent,
    LiftingHeartsComponent,
    SocialComponent,
    VideoModalComponent,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AppRoutingModule
  ]
})
export class CoreModule { }
