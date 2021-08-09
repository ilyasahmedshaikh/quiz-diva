import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from './quiz.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
    children: [
      {
        path: '',
        component: QuizDetailComponent
      },
      {
        path: 'quiz-detail',
        component: QuizDetailComponent
      },
      {
        path: 'start-quiz',
        component: StartQuizComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
