import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {
  @Input() yearArr: any[];
  @Input() index: number;
  @Input() lastYear: boolean;


  constructor() { }

  ngOnInit() {
  }

}
