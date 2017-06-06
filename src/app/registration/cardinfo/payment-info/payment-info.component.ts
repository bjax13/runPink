import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent implements OnInit {

  public months: number[] = [];
  public years: number[] = [];
  public today = new Date();
  public currDate: number = this.today.getFullYear();


  constructor() {

    this.months = Array(12).fill(1).map((x, i) => x = i + 1);
    this.years = Array(10).fill(this.currDate).map((x, i) => x += i )

    console.log(this.currDate);
  }

  ngOnInit() {
  }

}
