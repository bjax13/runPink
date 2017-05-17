import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DiscountBarComponent } from './header/discount-bar/discount-bar.component';
import { BannerComponent } from './home/banner/banner.component';
import { RegisterComponent } from './home/register/register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DiscountBarComponent,
    BannerComponent,
    RegisterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
