import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Question, AnswerSet } from '../models';
import { AnswerService } from '../services/answer.service';

@Component({
  moduleId: module.id,
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css'],
  providers: [AnswerService]
})
export class QuizAnswersComponent implements OnInit {
  @Input() currentQuestion: Question;
  @Output() onAnswerChoice = new EventEmitter<number>();

  @Input() currentAIdx: number;

  constructor() { }


  get answersText() {
    return this.currentQuestion.answers;
  }

  get currentAnswer(): number {
    if (this.currentAIdx < 0) { return undefined; }
    return this.currentAIdx;
  }

  set currentAnswer(aIdx: number) {
    this.currentAIdx = aIdx;
    this.onAnswerChoice.emit(aIdx);
  }

  ngOnInit() {
  }

}
