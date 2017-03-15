import { Component, OnInit, Input } from '@angular/core';

import { QuizService } from '../services/quiz.service';
import { Quiz } from '../models';

@Component({
  moduleId: module.id,
  selector: 'app-quiz-panel',
  templateUrl: './quiz-panel.component.html',
  styleUrls: ['./quiz-panel.component.css'],
  providers: [QuizService]
})
export class QuizPanelComponent implements OnInit {
  @Input()
  quiz: Quiz;

  constructor(
    private quizService: QuizService
  ) {  }

  public submitQuiz() {

  }

  ngOnInit() {
    if (this.quiz) {
      this.quizService.setCurrentQuiz(this.quiz);
    } else {
      console.log("HELP! No Quiz")
    }
  }

}
