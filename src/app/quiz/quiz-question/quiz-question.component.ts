import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Question, AnswerSet } from '../models';
import { QuestionService } from '../services/question.service';
import { AnswerService } from '../services/answer.service';

@Component({
  moduleId: module.id,
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
  providers: [QuestionService]
})
export class QuizQuestionComponent implements OnInit {
  @Output() onSubmission = new EventEmitter<number>();

  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService
  ) { }

  get currentQuestion(): Question {
    console.log("accessing question service from quiz question")
    return this.questionService.currentQuestion;
  }

  get questionText() {
    console.log("accessing question text from quiz question")
    return this.currentQuestion.question;
  }

  get hasNext(): boolean {
    return this.questionService.hasNext;
  }

  getNextQuestion() {

  }

  // get currentAnswer() : number {
  //   return this._currentAnswer;
  // }

  // set currentAnswer(aIdx: number) {
  //   this._currentAnswer = aIdx;
  //   this.onAnswerChoice.emit(aIdx);
  // }



  ngOnInit() {
  }

}
