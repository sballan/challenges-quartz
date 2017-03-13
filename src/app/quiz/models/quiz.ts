import { Question, QuestionObject } from './question';

export interface Quizable {
  id: string;
  questions: QuestionObject[];
}

export class Quiz {
  answers: WeakMap<Question, number> = new WeakMap();

  constructor(
    // Quick and (very) dirty way to get a unique id;
    public id: string = Math.random().toString(),
    public questions: Question[] = []
  ) {  }

  static make(qObj: Quizable) {
    const quiz = new Quiz(qObj.id);

    qObj.questions.forEach(q => {
      quiz.addQuestion(q);
    })

    return quiz;
  }

  addQuestion(qObj: QuestionObject) {
    const question = new Question(qObj);
    this.questions.push(question);
    return question;
  }

  get length() {
    return this.questions.length;
  }

}
