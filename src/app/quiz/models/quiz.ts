import { Question, QuestionObject } from './question';
import * as _ from 'lodash';

export class Quiz {
  answers: Map<Question, number> = new Map();

  constructor(
    public name?: string,
    public questions?: Question[]
  ) {  }

  addQuestion(qObj: QuestionObject) {
    const question = new Question(qObj);
    this.questions.push(question);
    return question;
  }

  setAnswer(question: Question, answerIndex: number) {
    this.answers.set(question, answerIndex);
  }

  getAnswer(question: Question) {
    return this.answers.get(question);
  }


}
