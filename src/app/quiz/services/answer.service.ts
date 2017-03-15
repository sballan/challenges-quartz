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
    console.log("got to add")
    console.log("and question is: ", question)
    const answer = new Answer(aIdx);

    if (!this.answerMap.has(question)) {
      this.answerMap.set(question, new AnswerSet());
    }
    this.answerMap.get(question).push(answer);
  }

  getLastAnswer(question: Question = this.currentQuestion) {
    console.log("Last Answer", this.answerMap.get(question));
    return this.answerMap.get(question).last;
  }

  getLastAnswers(questions: Question[] = this.currentQuiz.questions) {
    console.log("All Last Answers", questions);
    return questions.map(q => this.getLastAnswer(q));
  }

  getScore(quiz: Quiz = this.currentQuiz): ScoreObj {
    console.log("GET SCORE");
    const questions = quiz.questions;
    const answers = this.getLastAnswers(questions);
    const score = this.scoreQuestions(questions, answers);
    return { questions, answers, score };

  }



}
