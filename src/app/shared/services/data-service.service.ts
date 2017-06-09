import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getResultsData(){
    return [
      {
        "date": "2017-05-14",
        "title": "Bunion Bash of Bountiful",
        "description": "Run until your feet fall apart. First one to break every bone in both feet wins.",
        "imgLink": "assets/images/results/group-2.jpg" ,
        "link": "http://www.runnersworld.com/running-tips/10-bad-runner-habits-and-how-to-break-them"
      },
      {
        "date": "2017-04-01",
        "title": "Race for the cure",
        "description": "Salami? Pastrami? We all love cured meats. Winner gets a lifetime supply of curing spices.",
        "imgLink": "assets/images/results/group-3.jpg" ,
        "link": "http://honest-food.net/cured-meat/"
      },
      {
        "date": "2016-01-31",
        "title": "The Default Sport.",
        "description": "Be honest. If you were tall enough to play in the NBA you would. But you're not, so you run. Winner of this race gets season tickets to the Jazz.",
        "imgLink": "" ,
        "link": "http://www.nba.com/jazz/"
      },
      {
        "date": "2016-12-25",
        "title": "Christmas bash",
        "description": "In the air there's the feeling of frostbite.",
        "imgLink": "assets/images/results/group-4.jpg" ,
        "link": "https://en.wikipedia.org/wiki/Christmas"
      },
      {
        "date": "2018-11-14",
        "title": "$alt ¢ity ¢a$h ra¢e",
        "description": "Everyone owes the first-place winner the same number of dollars as they place in the race. Redefining 'poor loser'.",
        "imgLink": "assets/images/results/group-5.jpg" ,
        "link": "https://en.wikipedia.org/wiki/Income_inequality_in_the_United_States"
      },
      {
        "date": "2018-02-16",
        "title": "Orem City 10 yard dash.",
        "description": "Lets get it over with.",
        "imgLink": "assets/images/results/group-6.jpg" ,
        "link": "http://media1.giphy.com/media/LiTTNQx8gGlrO/giphy.gif"
      },
      {
        "date": "2019-02-16",
        "title": "Kings Peak Klassik",
        "description": "You will be covered in honey and berries before the ascent to the peak. If you get eaten by a bear you lose and won't be refunded your sign up fee.",
        "imgLink": "assets/images/results/group-7.jpg" ,
        "link": "http://www.summitpost.org/kings-peak/150376"
      },
      {
        "date": "2019-07-18",
        "title": "Winners Bash Dash",
        "description": "Everybody wins because we're not running anywhere, just driving to Chick-fil-a for lunch.",
        "imgLink": "assets/images/results/group-6.jpg" ,
        "link": "https://www.chick-fil-a.com/"
      }
    ]
  }
  getCharityHistoryData(){
    return [
      {
        "date": "2017-10-31",
        "title": "All Hallows Charity",
        "description": "Donate precious candy to over-indulged children on the cusp of diabetes.",
        "imgLink": "assets/images/banners/solidPink.png" ,
        "link": "https://media4.giphy.com/media/mDndUmUG5u77i/giphy.gif"
      },
      {
        "date": "2018-04-22",
        "title": "Be Excellent to Each Other",
        "description": "A free showing of Bill and Teds Excellent adventure for the poor souls who haven't yet seen it.",
        "imgLink": "assets/images/banners/solidPink.png" ,
        "link": "https://www.youtube.com/watch?v=IcTOOFXAGeE"
      }
    ]
  }

}
