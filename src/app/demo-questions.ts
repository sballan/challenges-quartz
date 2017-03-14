import { QuestionObject } from './quiz';

const DemoQuestions: QuestionObject[] = [
  {
    question: `Which pizza topping is the best?`,
    answers: [
      `Mushroom`,
      `Pineapple`,
      `Onion`,
      `Cheese Only`
    ],
    correctIndex: 0
  },
  {
    question: `Which band is the best?`,
    answers: [
      `Rolling Stones`,
      `Led Zepplin`,
      `The Beatles`,
      `I don't like Classic Rock`
    ],
    correctIndex: 2
  },
  {
    question: `Which JavaScript framework is the best?`,
    answers: [
      `Angular`,
      `React`,
      `Vue`,
      `VanillaJS`
    ],
    correctIndex: 0
  }
]

export default DemoQuestions;
