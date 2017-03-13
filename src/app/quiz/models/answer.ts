import { Question } from './question';
import { Quiz } from './quiz';

export class AnswerSet {
  // Map of question index to an array of all answer indeces given so far
  public answerMap: Map<number, number[]>

  constructor(length?: number) {
    if (length) this.init(length);
  }

  init(length: number) {
    for (let i = 0; i < length; i++) {
      this.answerMap.set(i, []);
    }
  }

  addAnswer(qIdx, aIdx) {
    if (!this.answerMap.has(qIdx)) {
      this.answerMap.set(qIdx, []);
    }
    this.answerMap.get(qIdx).push(aIdx);
  }


  mergeSet(answerSet: AnswerSet) {
    answerSet.answerMap.forEach((aIdxArr, qIdx) => {
      if (!this.answerMap.has(qIdx)) {
        this.answerMap.set(qIdx, aIdxArr);
      }

      this.answerMap.get(qIdx).push(...aIdxArr);
    })
  }

  // Get the answers for a certain answer index.  Defaults to latest answer index (signified with -1). Question is signified by index in array, answer is signified by value in array.
  getAnswers(aIdx: number = -1) : number[] {
    const answers: number[] = [];
    this.answerMap.forEach((aIdxArr, qIdx) => {
      const index = (aIdx === -1) ? aIdxArr.length - 1 : aIdx;
      answers[qIdx] = aIdxArr[index];
    })
    return answers;
  }

}
