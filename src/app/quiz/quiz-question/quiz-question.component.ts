import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../models';

@Component({
  moduleId: module.id,
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {
  @Input() question: Question;
  @Output() onAnswerChoice = new EventEmitter<number>();

  private _currentAnswer: number;

  public get currentAnswer() : number {
    return this._currentAnswer;
  }

  public set currentAnswer(aIdx: number) {
    this._currentAnswer = aIdx;
    this.onAnswerChoice.emit(aIdx);
  }

  constructor() { }

  public get questionText() {
    return this.question.question;
  }

  public get answersText() {
    return this.question.answers;
  }


  ngOnInit() {
  }

}
