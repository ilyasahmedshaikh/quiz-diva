import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  featuredList: any = [];
  newList: any = [];

  constructor() { }

  ngOnInit(): void {
    this.featuredList = [
      { image: "assets/img/fq1.png", name: "ROCKY'S GOLDEN APPLE ADVENTURE" },
      { image: "assets/img/fq2.png", name: "THE COLORBLIND IMAGE QUIZ" },
      { image: "assets/img/fq3.png", name: "WHICH PRICE IS RIGHT?" }
    ]

    this.newList = [
      { image: "assets/img/nq1.jpg", name: "ULTIMATE CHRISTMAS QUIZ" },
      { image: "assets/img/nq2.jpg", name: "SPOT SANTA QUIZ" },
      { image: "assets/img/nq3.jpg", name: "ULTIMATE HALLOWEEN QUIZ" },
      { image: "assets/img/nq4.jpg", name: "AMONG US TASK QUIZ" },
      { image: "assets/img/nq5.jpg", name: "FALL GUYS MISSING PIECE QUIZ" },
      { image: "assets/img/nq6.jpg", name: "SPOT THE CHAMELEON" },
      { image: "assets/img/nq7.jpg", name: "THE ULTIMATE SIMPSONS QUIZ" },
      { image: "assets/img/nq8.jpg", name: "MINECRAFT CRAFTING QUIZ V2" },
      { image: "assets/img/nq9.png", name: "FRESH FRUIT QUIz" }
    ]
  }

}
