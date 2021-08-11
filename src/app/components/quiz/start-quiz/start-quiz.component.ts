import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent implements OnInit {

  questions: any = [
    {
      id: 1,
      questionImage: 'assets/img/qd1.png',
      questionText: 'Which price is right?',
      answers: [35, 110, 84, 74]
    },
    {
      id: 2,
      questionImage: 'assets/img/qd1.png',
      questionText: 'Which number is right?',
      answers: [45, 110, 12, 74]
    },
    {
      id: 3,
      questionImage: 'assets/img/qd1.png',
      questionText: 'Which width number is right?',
      answers: [23, 56, 89, 74]
    },
    {
      id: 4,
      questionImage: 'assets/img/qd1.png',
      questionText: 'Which price is right?',
      answers: [35, 110, 84, 74]
    }
  ]

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

  question: any = this.questions[0];
  questionIndex: number = 0;
  quizAccomplished: boolean = false;
  accomplishmentPercentage: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAnswerEvent(event) {
    this.questionIndex = this.questionIndex+1;
    this.calculateProgress();

    if (event == true) {
      if (this.questionIndex < this.questions.length) {
        this.question = this.questions[this.questionIndex];
      } else {
        this.quizAccomplished = true;
        console.log('Quiz Accomplished');
      }
    }
    else {
      // do nothing
    }
  }

  calculateProgress() {
    this.accomplishmentPercentage = (this.questionIndex/this.questions.length)*100;
  }

}
