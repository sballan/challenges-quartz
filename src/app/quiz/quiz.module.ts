import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizPanelComponent } from './quiz-panel/quiz-panel.component';
import { QuestionService } from './question.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuizPanelComponent],
  providers: []
})
export class QuizModule { }
