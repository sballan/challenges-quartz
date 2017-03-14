import { Injectable } from '@angular/core';

import { Quiz, Question, Quizable, AnswerSet } from './models';

@Injectable()
export class QuizService {
  private currentQuiz: Quiz = undefined;
  // Map of quiz.id to quiz
  private quizMap: Map<string, Quiz> = new Map();
  // WeakMap to keep answer sets as long as a quiz exists
  private answerSetMap: WeakMap<Quiz, AnswerSet> = new WeakMap();


  // Methods are chainable

  private getAnswerSet(quiz: Quiz) {
    if (!this.answerSetMap.has(quiz)) {
      throw Error(`Quiz "${quiz.id} was added improperly`);
    }
    return this.answerSetMap.get(quiz);
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

  addQuiz(quiz: Quiz, setAsCurrent: boolean = false) : QuizService {
    this.quizMap.set(quiz.id, quiz);
    this.answerSetMap.set(quiz, new AnswerSet(quiz.length));
    if (setAsCurrent) { this.setCurrentQuiz(quiz); }
    return this;
  }

  deleteQuiz(quizId: string) : QuizService {
    this.quizMap.delete(quizId);
    return this;
  }

  // // Finds the answerSet for the quiz, finds the correct question, and adds the answerIndex
  // addAnswer(quiz = this.currentQuiz, qIdx, aIdx) : QuizService {
  //   if (!quiz) throw Error(`No quiz argument provided, and no currentQuiz in service.`);

  //   const answerSet = this.getAnswerSet(quiz);
  //   answerSet.addAnswer(qIdx, aIdx);
  //   return this;
  // }

  addAnswerSet(quiz: Quiz = this.currentQuiz, answerSet: AnswerSet) : QuizService {
    if (!quiz) throw Error(`No quiz argument provided, and no currentQuiz in service.`);

    const origAnswerSet = this.getAnswerSet(quiz);
    origAnswerSet.mergeSet(answerSet);
    return this;
  }

  // Get the score for a certain answer index.  Defaults to latest answer index. Returns array with number correct and total number.
  getScore(quiz: Quiz = this.currentQuiz, aIdx: number = -1) : number[] {
    const answers = this.getAnswerSet(quiz).getAnswers(aIdx);
    let correctCounter = 0;

    answers.forEach((aIdx, qIdx)=> {
      const question = this.getQuestion(quiz, qIdx);
      correctCounter += (question.isCorrect(aIdx)) ? 1 : 0;
    })

    return [correctCounter, quiz.length];
  }

}
