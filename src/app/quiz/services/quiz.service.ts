import { Injectable } from '@angular/core';

import { Quiz, Question, Quizable, AnswerSet, QuestionSet } from '../models';

@Injectable()
export class QuizService {
  public currentQuiz: Quiz = undefined;
  // Map of quiz.id to quiz
  private quizMap: Map<string, Quiz> = new Map();


  // Methods are chainable
  setCurrentQuiz(quiz: Quiz | string): QuizService {
    if (typeof quiz === 'string') {
      quiz = this.getQuiz(quiz);
    }
    this.currentQuiz = quiz;
    return this;
  }

  makeQuiz(quizable: Quizable) : QuizService {
    const quiz = Quiz.make(quizable);
    this.addQuiz(quiz);
    return this;
  }

  addQuiz(quiz: Quiz) : QuizService {
    this.quizMap.set(quiz.id, quiz);
    this.setCurrentQuiz(quiz);
    return this;
  }

  getQuiz(id: string) : Quiz {
    return this.quizMap.get(id);
  }

  deleteQuiz(quizId: string) : QuizService {
    this.quizMap.delete(quizId);
    return this;
  }


}
