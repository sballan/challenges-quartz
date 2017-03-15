import { Injectable } from '@angular/core';

import { Answer, AnswerSet, Question, Quiz } from '../models';
import { QuizService } from './quiz.service';
import { QuestionService } from './question.service';

export interface ScoreObj {
  questions: Question[];
  answers: Answer[];
  score: number[];
}

@Injectable()
export class AnswerService {
  public answerMap: WeakMap<Question, AnswerSet> = new WeakMap();
  public scores: WeakMap<Quiz, ScoreObj[]> = new WeakMap();

  constructor(
    private questionService: QuestionService
  ) { }

  private scoreQuestions(qArr: Question[], aArr: Answer[]) {
    let counter = 0;

    qArr.forEach((q, i) => {
      if (q.isCorrect(aArr[i].aIdx)) {
        counter++
      }
    })
    return [counter, qArr.length];
  }

  get currentQuiz() { return this.questionService.currentQuiz; }
  get currentQuestion() { return this.questionService.currentQuestion; }

  add(aIdx: number, question?: Question) {
    const answer = new Answer(aIdx);

    if (!this.answerMap.has(question)) {
      this.answerMap.set(question, new AnswerSet());
    }
    this.answerMap.get(question).push(answer);
  }

  getLastAnswer(question: Question = this.currentQuestion) {
    return this.answerMap.get(question).last;
  }

  getLastAnswers(questions: Question[] = this.currentQuiz.questions) {
    return questions.map(q => this.getLastAnswer(q));
  }

  getScore(quiz: Quiz = this.currentQuiz): ScoreObj {
    const questions = quiz.questions;
    const answers = this.getLastAnswers(questions);
    const score = this.scoreQuestions(questions, answers);
    return { questions, answers, score };

  }



}
