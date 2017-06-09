import { Component} from '@angular/core';
import { DataService } from '../shared/services/data-service.service';


@Component({
  selector: 'app-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.scss'],
  providers: [DataService]
})
export class CharitiesComponent  {
  years = [];
  resultData = [];

  constructor(dataService: DataService) {
     this.resultData = dataService.getCharityHistoryData()

     this.years.push(
       {
         "title": "past ChaRitiEs",
         "raceArr": []
       }
     )
     for (let i = 0; i < this.resultData.length; i++) {
         //set button text by adding buttonText key to race object
         this.resultData[i].buttonText = "VISIT pagE";

         //checked to see if race came with img link otherwise set to default img
         if  (!this.resultData[i].imgLink){
           this.resultData[i].imgLink = "assets/images/banners/solidPink.png"
         }

         this.years[0].raceArr.push(this.resultData[i])

         this.years.sort((a,b)=>{
           return a.raceArr[0].date.slice(0,4) - b.raceArr[0].date.slice(0,4);
         })
     }
   }


}
