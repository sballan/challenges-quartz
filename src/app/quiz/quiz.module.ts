import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuizPanelComponent } from './quiz-panel/quiz-panel.component';
import { QuizService } from './quiz.service';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    QuizPanelComponent,
    QuizQuestionComponent
  ],
  providers: [
    QuizService
  ],
  exports: [
    QuizPanelComponent
  ]
})
export class QuizModule { }
