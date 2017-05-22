import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-race-result-card',
  templateUrl: './race-result-card.component.html',
  styleUrls: ['./race-result-card.component.scss']
})
export class RaceResultCardComponent implements OnInit {
  @Input() raceArr: string[];

  constructor() { }

  ngOnInit() {
  }

}
