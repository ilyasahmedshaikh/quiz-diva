import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { QuizQuestionComponent } from './start-quiz/quiz-question/quiz-question.component';
import { QuizThankyouComponent } from './start-quiz/quiz-thankyou/quiz-thankyou.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';


@NgModule({
  declarations: [QuizComponent, StartQuizComponent, QuizQuestionComponent, QuizThankyouComponent, QuizDetailComponent],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
