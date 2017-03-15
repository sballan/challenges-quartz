import { Injectable } from '@angular/core';

import { Answer, AnswerSet, Question, Quiz } from '../models';
import { QuizService } from './quiz.service';
import { QuestionService } from './question.service';

@Injectable()
export class AnswerService {
  public answerMap: WeakMap<Question, AnswerSet> = new WeakMap();

  constructor(
    private questionService: QuestionService
  ) { }

  get currentQuiz() { return this.questionService.currentQuiz; }
  get currentQuestion() { return this.questionService.currentQuestion; }

  add(question: Question, aIdx: number) {
    const answer = new Answer(aIdx);
    this.answerMap.get(question).push(answer);
  }

  addToCurrent(aIdx) {
    this.add(this.currentQuestion, aIdx);
  }

  getAnswer(question: Question) {
    return this.answerMap.get(question).last;
  }

  getAnswers(question: Question) {
    return this.answerMap.get(question).all;
  }



}
