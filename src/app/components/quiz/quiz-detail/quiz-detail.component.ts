import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent implements OnInit {

  newList: any = [];

  constructor() { }

  ngOnInit(): void {
    this.newList = [
      { image: "assets/img/nq1.jpg", name: "ULTIMATE CHRISTMAS QUIZ" },
      { image: "assets/img/nq2.jpg", name: "SPOT SANTA QUIZ" },
      { image: "assets/img/nq3.jpg", name: "ULTIMATE HALLOWEEN QUIZ" },
      { image: "assets/img/nq4.jpg", name: "AMONG US TASK QUIZ" },
      { image: "assets/img/nq5.jpg", name: "FALL GUYS MISSING PIECE QUIZ" }
    ]
  }

}
