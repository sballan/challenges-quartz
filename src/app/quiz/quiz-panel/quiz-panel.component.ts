import { Component, OnInit, Input } from '@angular/core';

import { QuizService } from '../services/quiz.service';
import { ScoreObj } from '../services/answer.service';
import { Quiz, Answer } from '../models';

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

  public active = false;
  public finished = false;
  public hide = false;

  public scoreString: string;

  constructor(
    private quizService: QuizService
  ) {  }

  startQuiz() {
    this.active = true;
  }

  onFinished(scoreObj: ScoreObj) {
    this.finished = true;
    this.scoreString = `${scoreObj.score[0]} out of ${scoreObj.score[1]}`
    console.log(scoreObj);
  }

  ngOnInit() {
    if (this.quiz) {
      this.quizService.setCurrentQuiz(this.quiz);
    } else {
      console.log("HELP! No Quiz")
    }

    setTimeout(() => {
      if (!this.active) {
        this.hide = true;
      }
    }, 5000);
  }

}
