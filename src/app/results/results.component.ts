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
          'SPRING 5K/10K PLEASANT GROVE',
          'October 10, 2015' ,
          'www.google.com',
          'assets/images/results/group-2.jpg'
        ],
        [
          'PARK CITY HALF MARATHON, 5K/10K',
          'October 10, 2015' ,
          'www.google.com',
          'assets/images/results/group-3.jpg'
        ],
      ]
    ],
    [2014,
      [
        [
          'UTAH COUNTY 5K/10K',
          'April 19, 2014' ,
          'www.google.com',
          'assets/images/results/group-4.jpg'
        ],
        [
          'PARK CITY HALF MARATHON AND 5K',
          'October 11, 2014' ,
          'www.google.com',
          'assets/images/results/group-5.jpg'
        ],

      ]
    ],
    [2013,
      [
        [
          'PLEASANT GROVE 5K',
          'April 27, 2013' ,
          'www.google.com',
          'assets/images/results/group-6.jpg'
        ],
        [
          'PARK CITY HALF MARATHON AND 5K',
          'October 12, 2013' ,
          'www.google.com',
          'assets/images/results/group-7.jpg'
        ],

      ]
    ],
    [2012,
      [
        [
          'PLEASANT GROVE 5K',
          'April 27, 2012' ,
          'www.google.com',
          'assets/images/results/group-6.jpg'
        ],
        [
          'PARK CITY HALF MARATHON AND 5K',
          'October 13, 2012' ,
          'www.google.com',
          'assets/images/results/group-7.jpg'
        ],
      ]
    ],
  ]

  constructor() { }

  ngOnInit() {
  }

}
