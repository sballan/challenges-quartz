import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuizPanelComponent } from './quiz-panel/quiz-panel.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';

import { QuizService, QuestionService, AnswerService } from './services';
@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    QuizPanelComponent,
    QuizQuestionComponent,
    QuizAnswersComponent
  ],
  providers: [
    QuizService,
    QuestionService,
    AnswerService
  ],
  exports: [
    QuizPanelComponent
  ]
})
export class QuizModule { }
