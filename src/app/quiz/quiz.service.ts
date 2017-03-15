import { Injectable } from '@angular/core';

import { Quiz, Question, Quizable, AnswerSet, AnswersMap } from './models';

@Injectable()
export class QuizService {
  private currentQuiz: Quiz = undefined;
  // Map of quiz.id to quiz
  private quizMap: Map<string, Quiz> = new Map();
  // WeakMap to keep answer sets as long as a quiz exists
  private answersMap: AnswersMap


  // Methods are chainable

  private getAnswerSet(quiz: Quiz, index?: number) {
    return this.answersMap.getAnswerSet(quiz, index);
  }

  private getQuestion(quiz: Quiz, qIdx: number) {
    return quiz.questions[qIdx];
  }

  // By default, there is no currentQuiz.  Best to use this if you know the service will only use a single quiz.
  setCurrentQuiz(quiz: Quiz) : QuizService {
    this.currentQuiz = quiz;
    return this;
  }

  makeQuiz(quizable: Quizable, setAsCurrent: boolean = false) : QuizService {
    const quiz = Quiz.make(quizable);
    this.addQuiz(quiz)
    return this;
  }

  getQuiz(id: string) {
    return this.quizMap.get(id);
  }

  addQuiz(quiz: Quiz, setAsCurrent: boolean = false) : QuizService {
    this.quizMap.set(quiz.id, quiz);
    this.answersMap.addQuiz(quiz);
    if (setAsCurrent) { this.setCurrentQuiz(quiz); }
    return this;
  }

  deleteQuiz(quizId: string) : QuizService {
    this.quizMap.delete(quizId);
    return this;
  }

  addAnswerSet(quiz: Quiz = this.currentQuiz, answerSet: AnswerSet) : QuizService {
    if (!quiz) throw Error(`No quiz argument provided, and no currentQuiz in service.`);

    this.answersMap.addAnswerSet(quiz, answerSet);
    return this;
  }

    // Get the score for a certain answer index.  Defaults to latest answer index. Returns array with number correct and total number.
  getScore(quiz: Quiz = this.currentQuiz, aIdx: number = -1) : number[] {
    const answers = this.answersMap.getAnswerSet(quiz, aIdx).getAnswers();
    let correctCounter = 0;

    answers.forEach((aIdx, qIdx)=> {
      const question = this.getQuestion(quiz, qIdx);
      correctCounter += (question.isCorrect(aIdx)) ? 1 : 0;
    })

    return [correctCounter, quiz.length];
  }





}
