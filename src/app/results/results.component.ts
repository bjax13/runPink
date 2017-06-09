import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data-service.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: [DataService]
})
export class ResultsComponent implements OnInit {
  years = [];
  resultData = [];


  constructor(dataService: DataService) {
     this.resultData = dataService.getResultsData()

     let tempArr = [];

     for (let i = 0; i < this.resultData.length; i++) {
         //set button text by adding buttonText key to race object
         this.resultData[i].buttonText = "SEE Results";

         //checked to see if race came with img link otherwise set to default img
         if  (!this.resultData[i].imgLink){
           this.resultData[i].imgLink = "assets/images/banners/solidPink.png"
         }

         //checked to see what year the race data was for and organized by year
         if(tempArr.indexOf(this.resultData[i].date.slice(0,4)) === -1){
           tempArr.push(this.resultData[i].date.slice(0,4))
           this.years.push(
             {
               "title": this.resultData[i].date.slice(0,4)+ " Races",
               "raceArr": [this.resultData[i]]
             }
           )
         }else{
           for (let j = 0; j < this.years.length; j++) {
               if (this.years[j].raceArr[0].date.slice(0,4) === this.resultData[i].date.slice(0,4)) {
                   this.years[j].raceArr.push(this.resultData[i]);
               }
           }
         }
         
         this.years.sort((a,b)=>{
           return a.raceArr[0].date.slice(0,4) - b.raceArr[0].date.slice(0,4);
         })
     }

   }





  // [
  //   [2015,
  //     [
  //       [
  //         'SPRING 5K/10K PLEASANT GROVE',
  //         'October 10, 2015' ,
  //         'www.google.com',
  //         'assets/images/results/group-2.jpg',
  //         'SEE RESULTS'
  //       ],
  //       [
  //         'PARK CITY HALF MARATHON, 5K/10K',
  //         'October 10, 2015' ,
  //         'www.google.com',
  //         'assets/images/results/group-3.jpg',
  //         'SEE RESULTS'
  //       ],
  //     ]
  //   ],
  //   [2014,
  //     [
  //       [
  //         'UTAH COUNTY 5K/10K',
  //         'April 19, 2014' ,
  //         'www.google.com',
  //         'assets/images/results/group-4.jpg',
  //         'SEE RESULTS'
  //       ],
  //       [
  //         'PARK CITY HALF MARATHON AND 5K',
  //         'October 11, 2014' ,
  //         'www.google.com',
  //         'assets/images/results/group-5.jpg',
  //         'SEE RESULTS'
  //       ],
  //
  //     ]
  //   ],
  //   [2013,
  //     [
  //       [
  //         'PLEASANT GROVE 5K',
  //         'April 27, 2013' ,
  //         'www.google.com',
  //         'assets/images/results/group-6.jpg',
  //         'SEE RESULTS'
  //       ],
  //       [
  //         'PARK CITY HALF MARATHON AND 5K',
  //         'October 12, 2013' ,
  //         'www.google.com',
  //         'assets/images/results/group-7.jpg',
  //         'SEE RESULTS'
  //       ],
  //
  //     ]
  //   ],
  //   [2012,
  //     [
  //       [
  //         'PLEASANT GROVE 5K',
  //         'April 27, 2012' ,
  //         'www.google.com',
  //         'assets/images/results/group-6.jpg',
  //         'SEE RESULTS'
  //       ],
  //       [
  //         'PARK CITY HALF MARATHON AND 5K',
  //         'October 13, 2012' ,
  //         'www.google.com',
  //         'assets/images/results/group-7.jpg',
  //         'SEE RESULTS'
  //       ],
  //     ]
  //   ],
  // ]



  ngOnInit() {
  }

}
