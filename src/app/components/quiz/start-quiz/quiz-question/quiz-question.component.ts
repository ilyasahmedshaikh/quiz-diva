import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input('data') data: any = {};
  @Output() answerEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onAnswer() {
    this.answerEvent.emit(true);
  }

}
