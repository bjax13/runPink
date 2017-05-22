import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.scss']
})
export class CharitiesComponent implements OnInit {
  years =
  [
    ['Past Charites',
      [
        [
          'Pink Series Charity of 2014',
          'THE CHRISTI ANDERSON RACK PACK FOUNDATION' ,
          'www.google.com'
        ],
        [
          'Pink Series Charity of 2013',
          'IMAGE REBORN FOUNDATION' ,
          'www.gooogle.com'
        ],

      ]
    ],
  ]

  constructor() { }

  ngOnInit() {
  }

}
