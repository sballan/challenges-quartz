import { Question, QuestionObject } from './question';

export interface Quizable {
  id: string;
  questions: QuestionObject[];
}

export class Quiz {
  static make(qObj: Quizable) {
    const quiz = new Quiz(qObj.id);
    quiz.addQuestions(qObj.questions);

    return quiz;
  }

  constructor(
    // Quick and (very) dirty way to get a unique id;
    public id: string = Math.random().toString(),
    public questions: Question[] = []
  ) {  }


  addQuestion(qObj: QuestionObject) {
    const question = new Question(qObj);
    this.questions.push(question);
    return question;
  }

  addQuestions(qObjs: QuestionObject[]) {
    return qObjs.map(q => {
      return this.addQuestion(q);
    })
  }

  get length() {
    return this.questions.length;
  }




}
