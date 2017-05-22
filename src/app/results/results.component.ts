import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  years =
  [
    [2015,
      [
        [
          'PARK CITY HALF MARATHON, 5K/10K',
          'October 10, 2015' ,
          'www.google.com'
        ],
        [
          'SPRING 5K/10K PLEASANT GROVE',
          'October 10, 2015' ,
          'www.google.com'
        ],
        [
          'SPRING 5K/10K PLEASANT GROVE',
          'October 10, 2015' ,
          'www.google.com'
        ],
      ]
    ],
    [2014,
      [
        [
          'UTAH COUNTY 5K/10K',
          'April 19, 2014' ,
          'www.google.com'
        ],

      ]
    ],
    [2014,
      [
        [
          'UTAH COUNTY 5K/10K',
          'April 19, 2014' ,
          'www.google.com'
        ],
        [
          'PARK CITY HALF MARATHON AND 5K',
          'October 11, 2014' ,
          'www.google.com'
        ],
        [
          'PARK CITY HALF MARATHON AND 5K',
          'October 11, 2014' ,
          'www.google.com'
        ],
        [
          'PARK CITY HALF MARATHON AND 5K',
          'October 11, 2014' ,
          'www.google.com'
        ],
      ]
    ],
    [2014,
      [
        [
          'UTAH COUNTY 5K/10K',
          'April 19, 2014' ,
          'www.google.com'
        ],
        [
          'PARK CITY HALF MARATHON AND 5K',
          'October 11, 2014' ,
          'www.google.com'
        ],
        [
          'PARK CITY HALF MARATHON AND 5K',
          'October 11, 2014' ,
          'www.google.com'
        ],
        [
          'PARK CITY HALF MARATHON AND 5K',
          'October 11, 2014' ,
          'www.google.com'
        ],
        [
          'PARK CITY HALF MARATHON AND 5K',
          'October 11, 2014' ,
          'www.google.com'
        ],
      ]
    ],

  ]

  constructor() { }

  ngOnInit() {
  }

}
