import { Question } from './question';
import { Quiz } from './quiz';

export class Answer {
  public createdAt: number = Date.now();
  constructor(
    public aIdx: number
  ) { }
}

// Answer set for a particular question.
export class AnswerSet {
  private _answers: Answer[] = [];

  constructor(answer?: Answer | Answer[]) {
    if (Array.isArray(answer)) {
      this._answers = answer;
    } else if (answer) {
      this.push(answer);
    }
  }

  push(answer: Answer) { this._answers.push(answer); }

  get length() { return this._answers.length; }
  get all() { return this._answers; }
  get last() { return this._answers[this.length - 1]; }
  get first() { return this._answers[0]; }
}


