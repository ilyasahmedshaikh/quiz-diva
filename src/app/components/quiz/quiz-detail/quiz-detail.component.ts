import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {

  }

}
