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

export class QuestionSet {
  private answerSets: WeakMap<Question, AnswerSet> = new WeakMap();
  private qIdxs: WeakMap<Question, number> = new WeakMap();

  constructor(quiz?: Quiz) {
    if (quiz) { this.init(quiz); }
  }

  init(quiz: Quiz) {
    quiz.questions.forEach((q, i) => {
      this.qIdxs.set(q, i);
      this.answerSets.set(q, new AnswerSet());
    });
  }

  getAnswerSet(question: Question, index: number = -1) {
    this.assertQuiz(question);

    const aSets = this.answerSets.get(question)
    index = (index === -1) ? aSets.length : index;
    return aSets[index];
  }

  getAnswerSets(question: Question) {
    this.assertQuiz(question);

    return this.answerSets.get(question);
  }

  addAnswerSet(question: Question, answerSet: AnswerSet) {
    this.getAnswerSets(question).push(answerSet);
  }

  assertQuiz(question: Question) : boolean {
    if (!this.answerSets.has(question)) {
      throw Error(`This quiz hasn't been added to the answerSets: ${question}`);
    }
    return true;
  }


}
