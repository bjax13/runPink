import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BannerComponent,
  ],
  exports: [
    CommonModule,
    BannerComponent
  ]
})
export class SharedModule { }
