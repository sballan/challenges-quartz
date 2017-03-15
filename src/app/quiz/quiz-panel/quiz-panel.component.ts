import { Component, OnInit, Input } from '@angular/core';

import { QuizService } from '../services/quiz.service';
import { Quiz } from '../models';

@Component({
  moduleId: module.id,
  selector: 'app-quiz-panel',
  templateUrl: './quiz-panel.component.html',
  styleUrls: ['./quiz-panel.component.css'],
  providers: [QuizService]
})
export class QuizPanelComponent implements OnInit {
  @Input()
  quiz: Quiz;

  // private currentQuestionIdx = 0;
  // private currentAnswerIdx: number;
  // private quizLength;

  constructor(
    private quizService: QuizService
  ) { }


  // public onAnswerChoice(aIdx: number) {
  //   this.currentAnswerIdx = aIdx;
  // }

  // public get buttonText() {
  //   return this.hasNextQuestion ? "Next Question" : "Finish Quiz";
  // }

  // public get currentQuestion() {
  //   return this.quiz.questions[this.currentQuestionIdx];
  // }

  // public get hasNextQuestion() : boolean {
  //   return this.currentQuestionIdx < this.quiz.length - 1;
  // }

  public submitQuiz() {

  }

  // public getNextQuestion() {
  //   if (this.hasNextQuestion) {
  //     this.currentQuestionIdx++;
  //     this.currentAnswerIdx = undefined;
  //   } else {
  //     throw Error('There is no next question');
  //   }
  // }


  ngOnInit() {
    if (this.quiz) {
      this.quizService.setCurrentQuiz(this.quiz);
    }
  }

}
