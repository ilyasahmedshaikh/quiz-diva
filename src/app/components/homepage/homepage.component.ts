import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  featuredList: any = [
    {
      id: 1,
      image: "assets/img/fq1.png",
      name: "ROCKY'S GOLDEN APPLE ADVENTURE"
    },
    {
      id: 2,
      image: "assets/img/fq2.png",
      name: "THE COLORBLIND IMAGE QUIZ"
    },
    {
      id: 3,
      image: "assets/img/fq3.png",
      name: "WHICH PRICE IS RIGHT?"
    }
  ];

  ads: any = [
    {
      id: 1,
      image: 'assets/img/add.jpg',
      name: 'Find the best way for scanning your old photos',
      kind: 'Photomyne',
      sponsored: true
    },
    {
      id: 2,
      image: 'assets/img/add.jpg',
      name: 'Find the best way for scanning your old photos',
      kind: 'Photomyne',
      sponsored: false
    }
  ]

  sideAds: any = [
    {
      id: 1,
      image: 'assets/img/add.jpg',
      name: 'Find the best way for scanning your old photos',
      kind: 'Photomyne',
      sponsored: true
    }
  ]

  newList: any = [
    {
      id: 1,
      image: "assets/img/nq1.jpg",
      name: "ULTIMATE CHRISTMAS QUIZ"
    },
    {
      id: 2,
      image: "assets/img/nq2.jpg",
      name: "SPOT SANTA QUIZ"
    },
    {
      id: 3,
      image: "assets/img/nq3.jpg",
      name: "ULTIMATE HALLOWEEN QUIZ"
    },
    {
      id: 4,
      image: "assets/img/nq4.jpg",
      name: "AMONG US TASK QUIZ"
    },
    {
      id: 5,
      image: "assets/img/nq5.jpg",
      name: "FALL GUYS MISSING PIECE QUIZ"
    },
    {
      id: 6,
      image: "assets/img/nq6.jpg",
      name: "SPOT THE CHAMELEON"
    },
    {
      id: 7,
      image: "assets/img/nq7.jpg",
      name: "THE ULTIMATE SIMPSONS QUIZ"
    },
    {
      id: 8,
      image: "assets/img/nq9.png",
      name: "FRESH FRUIT QUIz"
    },
    {
      id: 9,
      image: "assets/img/nq3.jpg",
      name: "ULTIMATE HALLOWEEN QUIZ"
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
