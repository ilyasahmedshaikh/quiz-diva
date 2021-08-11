import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent implements OnInit {

  ads: any = [
    {
      id: 1,
      image: 'assets/img/add.jpg',
      name: 'Find the best way for scanning your old photos',
      kind: 'Photomyne',
      sponsored: true
    },
    {
      id: 1,
      image: 'assets/img/add.jpg',
      name: 'Find the best way for scanning your old photos',
      kind: 'Photomyne',
      sponsored: false
    },
    {
      id: 1,
      image: 'assets/img/add.jpg',
      name: 'Find the best way for scanning your old photos',
      kind: 'Photomyne',
      sponsored: true
    },
    {
      id: 1,
      image: 'assets/img/add.jpg',
      name: 'Find the best way for scanning your old photos',
      kind: 'Photomyne',
      sponsored: false
    },
    {
      id: 1,
      image: 'assets/img/add.jpg',
      name: 'Find the best way for scanning your old photos',
      kind: 'Photomyne',
      sponsored: true
    },
    {
      id: 1,
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
    },
  ]

  newList: any = [
    {
      id: 1,
      image: "assets/img/nq1.jpg",
      name: "ULTIMATE CHRISTMAS QUIZ"
    },
    {
      id: 1,
      image: "assets/img/nq2.jpg",
      name: "SPOT SANTA QUIZ"
    },
    {
      id: 1,
      image: "assets/img/nq3.jpg",
      name: "ULTIMATE HALLOWEEN QUIZ"
    },
    {
      id: 1,
      image: "assets/img/nq4.jpg",
      name: "AMONG US TASK QUIZ"
    },
    {
      id: 1,
      image: "assets/img/nq5.jpg",
      name: "FALL GUYS MISSING PIECE QUIZ"
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
