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

  constructor() { }

  private _currentAnswer: number;

  get answersText() {
    return this.currentQuestion.answers;
  }

  get currentAnswer() : number {
    return this._currentAnswer;
  }

  set currentAnswer(aIdx: number) {
    this._currentAnswer = aIdx;
    this.onAnswerChoice.emit(aIdx);
  }

  ngOnInit() {
  }

}
