// QuestionObject contains a question string, an array of answer strings, and the index of the correct answer;
export interface QuestionObject {
  question: string;
  answers: string[];
  correctIndex: number;
}

export class Question {
  constructor(
    private qObj: QuestionObject
  ) {}

  // Public interface of the Question
  public get question() { return this.qObj.question }
  public get answers() { return this.qObj.answers }
  public get correct() {
    return this.qObj.answers[this.qObj.correctIndex]
  }

  public isCorrect(answer: string) {
    return answer === this.correct;
  }

}
