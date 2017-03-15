import { Injectable } from '@angular/core';

import { Quiz, Question } from '../models';
import { QuizService } from './quiz.service';

export interface QuizMeta {
  qIdxCurrent?: number;
  startedAt?: number;
}

@Injectable()
export class QuestionService {
  public quizMeta: WeakMap<Quiz, QuizMeta> = new WeakMap();
  constructor(
    private quizService: QuizService
  ) { }

  // currentQuiz can change live, and all the meta data is stored here. No need for a map of quizes here.
  get currentQuiz() {
    const quiz = this.quizService.currentQuiz;
    if (!this.quizMeta.has(quiz)) {
      this.quizMeta.set(quiz, { qIdxCurrent: 0 });
    }
    return quiz;
  }

  get currentMeta() {
    return this.quizMeta.get(this.currentQuiz);
  }

  get currentIndex(): number {
    return this.currentMeta.qIdxCurrent;
  }

  get currentQuestion(): Question {
    return this.currentQuiz.questions[this.currentIndex];
  }

  get hasNext() { return this.currentIndex < this.currentQuiz.length - 1; }
  get hasPrev() { return this.currentIndex > 0; }

  startQuiz() {
    const meta: QuizMeta = { qIdxCurrent: 0, startedAt: Date.now() };
    this.quizMeta.set(this.currentQuiz, meta);
  }

  setCurrentQuestion(qIdx: number) {
    this.currentMeta.qIdxCurrent = qIdx;
  }



}
