import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-thankyou',
  templateUrl: './quiz-thankyou.component.html',
  styleUrls: ['./quiz-thankyou.component.scss']
})
export class QuizThankyouComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
