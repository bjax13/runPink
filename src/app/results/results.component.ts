import { Component} from '@angular/core';
import { DataService } from '../shared/services/data-service.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  providers: [DataService]
})
export class ResultsComponent {
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
}
